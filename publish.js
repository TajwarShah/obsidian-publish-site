(function() {
  // Load jQuery
  var script_jquery = document.createElement('script');
  script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
  script_jquery.setAttribute('type', 'text/javascript');
  script_jquery.setAttribute('charset', 'utf8');
  document.getElementsByTagName("body")[0].appendChild(script_jquery);

  // Load DataTables CSS
  var link_datatables = document.createElement('link');
  link_datatables.setAttribute('rel', 'stylesheet');
  link_datatables.setAttribute('href', 'https://media.shiabrain.com/webfiles/dataTables.dataTables.min.css');
  link_datatables.setAttribute('type', 'text/css');
  document.getElementsByTagName('head')[0].appendChild(link_datatables);

  // Load DataTables JS
  var script_datatables = document.createElement('script');
  script_datatables.src = 'https://media.shiabrain.com/webfiles/dataTables.min.js';
  script_datatables.setAttribute('type', 'text/javascript');
  script_datatables.setAttribute('charset', 'utf8');

  script_jquery.onload = () => {
    document.getElementsByTagName('body')[0].appendChild(script_datatables);
  };

  function checkReady(callback) {
    if (window.jQuery && $.fn.DataTable) {
      callback(jQuery);
    } else {
      setTimeout(() => checkReady(callback), 50);
    }
  }

  function adjustTableColumnWidths() {
    $("table").each(function() {
      const table = $(this);
      const colWidths = [];
      const minColumnWidth = 100; // Minimum column width in pixels
      const maxCharacterCount = 40; // Character limit before wrapping

      table.find("th, td").css({
        "word-wrap": "break-word",
        "overflow-wrap": "break-word",
        "white-space": "normal",
        "max-width": "300px"
      });

      table.find("tr").each(function() {
        $(this).find("td, th").each(function(colIndex) {
          const cellContent = $(this).clone().find("a").replaceWith(function() { return $(this).text(); }).end().text();
          let cellWidth = getTextWidth(cellContent, $(this).css("font"));

          if (cellContent.length > maxCharacterCount) {
            cellWidth = getTextWidth(cellContent.slice(0, maxCharacterCount), $(this).css("font")); 
          }

          colWidths[colIndex] = Math.max(colWidths[colIndex] || minColumnWidth, cellWidth);
        });
      });

      table.find("tr").each(function() {
        $(this).find("td, th").each(function(colIndex) {
          $(this).css("min-width", colWidths[colIndex] + "px");
        });
      });
    });
  }

  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font || "16px Arial"; 
    return context.measureText(text).width + 10;
  }

  function styleDataTableControls() {
    setTimeout(() => {
      $(".top, .bottom").css({
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "width": "100%",
        "margin": "0.75em 0"
      });
    }, 100); // Delay ensures DataTables elements exist
  }

  function initializeDataTables() {
    $(document).ready(function() {
      $("table").each(function() {
        $(this).addClass("row-border order-column display");

        if (!$(this).find("tfoot").length) {
          const footer = $("<tfoot><tr></tr></tfoot>");
          $(this)
            .find("thead th")
            .each(function() {
              footer.find("tr").append('<th><input type="text" placeholder="" /></th>');
            });
          $(this).append(footer);
        }
      });

      $("table").each(function() {
        if (!$.fn.dataTable.isDataTable(this)) {
          const config = {
            dom: '<"top"Plf>rt<"bottom"ip>',
            searchPanes: { cascadePanes: true },
            select: true,
            stripeClasses: ["even", "odd"],
            initComplete: function() {
              adjustTableColumnWidths();
              styleDataTableControls();
            },
          };

          const table = $(this).DataTable(config);

          // Apply styles whenever the table redraws (pagination, filter, etc.)
          table.on('draw.dt', function () {
            adjustTableColumnWidths();
            styleDataTableControls();
          });
        }
      });

      adjustTableColumnWidths();
      styleDataTableControls();
    });
  }

  function observeDOMChanges() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "childList") {
          initializeDataTables();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function handleButtonClick(event) {
    const button = event.target.closest("button");
    if (button) {
      const targetUrl = button.getAttribute("data-href");
      if (targetUrl) {
        event.preventDefault();
        window.history.pushState({}, "", targetUrl);
        loadContent(targetUrl);
      }
    }
  }

  function loadContent(targetUrl) {
    $.ajax({
      url: targetUrl,
      type: "GET",
      success: function(response) {
        document.getElementById("main-content").innerHTML = response;
        initializeDataTables();
      },
      error: function() {
        alert("Error loading page content.");
      },
    });
  }

  document.addEventListener("click", handleButtonClick);

  script_datatables.onload = () => {
    checkReady(($) => {
      initializeDataTables();
      observeDOMChanges();
    });
  };
})();