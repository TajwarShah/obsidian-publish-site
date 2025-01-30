// (function() {
//   // Load jQuery script
//   var script_jquery = document.createElement('script');
//   script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
//   script_jquery.setAttribute('type', 'text/javascript');
//   script_jquery.setAttribute('charset', 'utf8');
//   document.getElementsByTagName("body")[0].appendChild(script_jquery);

//   // Load DataTables CSS
//   var link_datatables = document.createElement('link');
//   link_datatables.setAttribute('rel', 'stylesheet');
//   link_datatables.setAttribute('href', '//cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css');
//   link_datatables.setAttribute('type', 'text/css');
//   document.getElementsByTagName('head')[0].appendChild(link_datatables);

//   // Load DataTables script
//   var script_datatables = document.createElement('script');
//   script_datatables.src = '//cdn.datatables.net/2.2.1/js/dataTables.min.js';
//   script_datatables.setAttribute('type', 'text/javascript');
//   script_datatables.setAttribute('charset', 'utf8');

//   // Load DataTables only after jQuery is fully loaded
//   script_jquery.onload = () => {
//       document.getElementsByTagName('body')[0].appendChild(script_datatables);
//   };

//   // Function to check if both jQuery and DataTables are available
//   function checkReady(callback) {
//       if (window.jQuery && $.fn.DataTable) {
//           callback(jQuery);
//       } else {
//           setTimeout(() => checkReady(callback), 50);
//       }
//   }

//   // Function to initialize DataTables with custom columnDefs and stripeClasses
//   function initializeDataTables() {
//       $(document).ready(function() {
//           // Ensure the table has a footer for column-specific search inputs
//           $('table').each(function() {
//               if (!$(this).find('tfoot').length) {
//                   const footer = $('<tfoot><tr></tr></tfoot>');
//                   $(this).find('thead th').each(function() {
//                       footer.find('tr').append('<th><input type="text" placeholder="" /></th>');
//                   });
//                   $(this).append(footer);  // Append footer to the table
//               }
//           });

//           // Initialize DataTable with column-specific filtering, but only if it hasn't been initialized yet
//           $('table').each(function() {
//             $(this).addClass('row-border order-column');
//               if (!$.fn.dataTable.isDataTable(this)) {  // Check if the table is already a DataTable
//                   $(this).DataTable({
//                       dom: '<"top"Plf>rt<"bottom"ip>',
//                       searchPanes: {
//                           cascadePanes: true,
//                       },
//                       select: true,
//                       stripeClasses: ['even', 'odd'],  // This adds the stripe effect (alternating row colors)
//                       initComplete: function() {
//                           const api = this.api();
//                           api.columns().every(function() {
//                               const column = this;
//                               const header = $(column.header());
//                               const footerCell = $(column.footer());

//                               const input = $('<input type="text" placeholder="' + header.text() + '" style="width: 100%; border: 1px solid"; />')
//                                   .on('keyup change', function() {
//                                       column.search(this.value).draw();
//                                   });

//                               footerCell.html(input);
//                           });
//                       }
//                   });
//               }
//           });
//       });
//   }

//   // Function to observe DOM changes and reinitialize DataTables
//   function observeDOMChanges() {
//       const observer = new MutationObserver(function(mutations) {
//           mutations.forEach(function(mutation) {
//               // Check if new content is loaded (e.g., tables added/modified)
//               if (mutation.type === 'childList') {
//                   initializeDataTables();  // Reinitialize DataTables when new content is detected
//               }
//           });
//       });

//       // Configure observer to watch for added/removed nodes
//       observer.observe(document.body, { childList: true, subtree: true });
//   }

//   // Initialize everything once DataTables script is loaded
//   script_datatables.onload = () => {
//       checkReady(($) => {
//           initializeDataTables();  // Initialize DataTables once everything is ready

//           // Re-initialize tables on page navigation if needed (via app.on)
//           if (window.app && typeof window.app.on === 'function') {
//               window.app.on('navigated', () => {
//                   initializeDataTables();  // Re-initialize on navigation
//               });
//           }

//           // Start observing DOM changes to handle dynamic content
//           observeDOMChanges();
//       });
//   };
// })();


// (function() {
//   // Load jQuery script
//   var script_jquery = document.createElement('script');
//   script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
//   script_jquery.setAttribute('type', 'text/javascript');
//   script_jquery.setAttribute('charset', 'utf8');
//   document.getElementsByTagName("body")[0].appendChild(script_jquery);

//   // Load DataTables CSS
//   var link_datatables = document.createElement('link');
//   link_datatables.setAttribute('rel', 'stylesheet');
//   link_datatables.setAttribute('href', '//cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css');
//   link_datatables.setAttribute('type', 'text/css');
//   document.getElementsByTagName('head')[0].appendChild(link_datatables);

//   // Load DataTables script
//   var script_datatables = document.createElement('script');
//   script_datatables.src = '//cdn.datatables.net/2.2.1/js/dataTables.min.js';
//   script_datatables.setAttribute('type', 'text/javascript');
//   script_datatables.setAttribute('charset', 'utf8');

//   // Load DataTables only after jQuery is fully loaded
//   script_jquery.onload = () => {
//     document.getElementsByTagName('body')[0].appendChild(script_datatables);
//   };

//   // Function to check if both jQuery and DataTables are available
//   function checkReady(callback) {
//     if (window.jQuery && $.fn.DataTable) {
//       callback(jQuery);
//     } else {
//       setTimeout(() => checkReady(callback), 50);
//     }
//   }

//   // Function to initialize DataTables with custom columnDefs and stripeClasses
//   function initializeDataTables() {
//     $(document).ready(function() {
//       $('table').each(function() {
//         $(this).addClass('row-border order-column display');
//         if (!$(this).find('tfoot').length) {
//           const footer = $('<tfoot><tr></tr></tfoot>');
//           $(this).find('thead th').each(function() {
//             footer.find('tr').append('<th><input type="text" placeholder="" /></th>');
//           });
//           $(this).append(footer);
//         }
//       });

//       $('table').each(function() {
//         if (!$.fn.dataTable.isDataTable(this)) {
//           const tableId = $(this).attr('id');
//           const config = {
//             dom: '<"top"Plf>rt<"bottom"ip>',
//             searchPanes: {
//               cascadePanes: true,
//             },
//             select: true,
//             stripeClasses: ['even', 'odd'],
//             initComplete: function() {
//               const api = this.api();
//               api.columns().every(function() {
//                 const column = this;
//                 const header = $(column.header());
//                 const footerCell = $(column.footer());
//                 const input = $('<input type="text" placeholder="' + header.text() + '" style="width: 100%; border: 1px solid;" />')
//                   .on('keyup change', function() {
//                     column.search(this.value).draw();
//                   });
//                 footerCell.html(input);
//               });
//             }
//           };

//           $(this).DataTable(config);
//         }
//       });
//     });
//   }

//   // Function to observe DOM changes and reinitialize DataTables
//   function observeDOMChanges() {
//     const observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//         if (mutation.type === 'childList') {
//           initializeDataTables(); // Reinitialize DataTables when new content is detected
//         }
//       });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//   }

//   // Function to handle the button click for internal navigation (without refreshing)
//   function handleButtonClick(event) {
//     const button = event.target.closest('button');  // Find the closest button element
//     if (button) {
//       // Get the custom link stored in a data attribute of the button
//       const targetUrl = button.getAttribute('data-href');
      
//       if (targetUrl) {
//         // Prevent the default behavior (refresh)
//         event.preventDefault();

//         // Update the browser's address bar using pushState
//         window.history.pushState({}, '', targetUrl);

//         // Instead of redirecting immediately, load content via AJAX
//         loadContent(targetUrl); // Load content dynamically via AJAX
//       }
//     }
//   }

//   // Function to simulate content loading for internal navigation
//   function loadContent(targetUrl) {
//     // For the sake of simplicity, we'll use a basic AJAX request to fetch new content.
//     // This can be modified based on how your pages are structured.
//     $.ajax({
//       url: targetUrl,
//       type: 'GET',
//       success: function(response) {
//         // Replace the current content with the new content (can be customized)
//         document.getElementById('main-content').innerHTML = response;

//         // Initialize DataTables for new content
//         initializeDataTables();
//       },
//       error: function() {
//         alert("Error loading page content.");
//       }
//     });
//   }

//   // Add event listener to the document and use event bubbling
//   document.addEventListener('click', handleButtonClick);

//   // Initialize everything once DataTables script is loaded
//   script_datatables.onload = () => {
//     checkReady(($) => {
//       initializeDataTables(); // Initialize DataTables once everything is ready

//       // Re-initialize tables on page navigation if needed (via app.on)
//       if (window.app && typeof window.app.on === 'function') {
//         window.app.on('navigated', () => {
//           initializeDataTables(); // Re-initialize on navigation
//         });
//       }

//       // Start observing DOM changes to handle dynamic content
//       observeDOMChanges();
//     });
//   };
// })();


// (function() {
//   // Load jQuery script
//   var script_jquery = document.createElement('script');
//   script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
//   script_jquery.setAttribute('type', 'text/javascript');
//   script_jquery.setAttribute('charset', 'utf8');
//   document.getElementsByTagName("body")[0].appendChild(script_jquery);

//   // Load DataTables CSS
//   var link_datatables = document.createElement('link');
//   link_datatables.setAttribute('rel', 'stylesheet');
//   link_datatables.setAttribute('href', '//cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css');
//   link_datatables.setAttribute('type', 'text/css');
//   document.getElementsByTagName('head')[0].appendChild(link_datatables);

//   // Load DataTables script
//   var script_datatables = document.createElement('script');
//   script_datatables.src = '//cdn.datatables.net/2.2.1/js/dataTables.min.js';
//   script_datatables.setAttribute('type', 'text/javascript');
//   script_datatables.setAttribute('charset', 'utf8');

//   // Load DataTables only after jQuery is fully loaded
//   script_jquery.onload = () => {
//     document.getElementsByTagName('body')[0].appendChild(script_datatables);
//   };

//   // Function to check if both jQuery and DataTables are available
//   function checkReady(callback) {
//     if (window.jQuery && $.fn.DataTable) {
//       callback(jQuery);
//     } else {
//       setTimeout(() => checkReady(callback), 50);
//     }
//   }

//   // Function to adjust table column widths dynamically
//   function adjustTableColumnWidths() {
//     $("table").each(function() {
//       const colWidths = []; // Store max width for each column
//       const rows = $(this).find("tr");

//       if (rows.length === 0) return; // No rows, exit

//       // Loop through each row and calculate max width per column
//       rows.each(function() {
//         $(this).find("td, th").each(function(colIndex) {
//           const contentWidth = getCellContentWidth(this);
//           colWidths[colIndex] = Math.max(colWidths[colIndex] || 0, contentWidth);
//         });
//       });

//       // Apply max width to each column
//       rows.each(function() {
//         $(this).find("td, th").each(function(colIndex) {
//           $(this).css("min-width", colWidths[colIndex] + "px"); // Set min-width dynamically
//         });
//       });
//     });
//   }

//   // Function to calculate the width of a cell’s content, including anchor tags
//   function getCellContentWidth(cell) {
//     const clone = $(cell).clone(); // Clone cell to measure
//     clone.css({
//       position: "absolute",
//       visibility: "hidden",
//       whiteSpace: "nowrap" // Prevent wrapping
//     });
//     $("body").append(clone);

//     const width = clone.outerWidth(); // Measure width
//     clone.remove(); // Clean up clone
//     return width;
//   }

//   // Function to initialize DataTables with custom settings
//   function initializeDataTables() {
//     $(document).ready(function() {
//       $("table").each(function() {
//         $(this).addClass("row-border order-column display");
//         if (!$(this).find("tfoot").length) {
//           const footer = $("<tfoot><tr></tr></tfoot>");
//           $(this)
//             .find("thead th")
//             .each(function() {
//               footer.find("tr").append('<th><input type="text" placeholder="" /></th>');
//             });
//           $(this).append(footer);
//         }
//       });

//       $("table").each(function() {
//         if (!$.fn.dataTable.isDataTable(this)) {
//           const config = {
//             dom: '<"top"Plf>rt<"bottom"ip>',
//             searchPanes: {
//               cascadePanes: true,
//             },
//             select: true,
//             stripeClasses: ["even", "odd"],
//             initComplete: function() {
//               const api = this.api();
//               api.columns().every(function() {
//                 const column = this;
//                 const header = $(column.header());
//                 const footerCell = $(column.footer());
//                 const input = $('<input type="text" placeholder="' + header.text() + '" style="width: 100%; border: 1px solid;" />')
//                   .on("keyup change", function() {
//                     column.search(this.value).draw();
//                   });
//                 footerCell.html(input);
//               });

//               // Adjust column widths after DataTable is fully initialized
//               adjustTableColumnWidths();
//             },
//           };

//           $(this).DataTable(config);
//         }
//       });

//       // Adjust table column widths
//       adjustTableColumnWidths();
//     });
//   }

//   // Function to observe DOM changes and reinitialize DataTables
//   function observeDOMChanges() {
//     const observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//         if (mutation.type === "childList") {
//           initializeDataTables(); // Reinitialize DataTables when new content is detected
//         }
//       });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//   }

//   // Function to handle the button click for internal navigation (without refreshing)
//   function handleButtonClick(event) {
//     const button = event.target.closest("button"); // Find the closest button element
//     if (button) {
//       // Get the custom link stored in a data attribute of the button
//       const targetUrl = button.getAttribute("data-href");

//       if (targetUrl) {
//         // Prevent the default behavior (refresh)
//         event.preventDefault();

//         // Update the browser's address bar using pushState
//         window.history.pushState({}, "", targetUrl);

//         // Instead of redirecting immediately, load content via AJAX
//         loadContent(targetUrl); // Load content dynamically via AJAX
//       }
//     }
//   }

//   // Function to simulate content loading for internal navigation
//   function loadContent(targetUrl) {
//     $.ajax({
//       url: targetUrl,
//       type: "GET",
//       success: function(response) {
//         document.getElementById("main-content").innerHTML = response;
//         initializeDataTables(); // Reinitialize DataTables for new content
//       },
//       error: function() {
//         alert("Error loading page content.");
//       },
//     });
//   }

//   // Add event listener to the document and use event bubbling
//   document.addEventListener("click", handleButtonClick);

//   // Initialize everything once DataTables script is loaded
//   script_datatables.onload = () => {
//     checkReady(($) => {
//       initializeDataTables(); // Initialize DataTables once everything is ready

//       // Re-initialize tables on page navigation if needed (via app.on)
//       if (window.app && typeof window.app.on === "function") {
//         window.app.on("navigated", () => {
//           initializeDataTables(); // Re-initialize on navigation
//         });
//       }

//       // Start observing DOM changes to handle dynamic content
//       observeDOMChanges();
//     });
//   };
// })();

// (function() {
//   var script_jquery = document.createElement('script');
//   script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
//   script_jquery.setAttribute('type', 'text/javascript');
//   script_jquery.setAttribute('charset', 'utf8');
//   document.getElementsByTagName("body")[0].appendChild(script_jquery);

//   var link_datatables = document.createElement('link');
//   link_datatables.setAttribute('rel', 'stylesheet');
//   link_datatables.setAttribute('href', '//cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css');
//   link_datatables.setAttribute('type', 'text/css');
//   document.getElementsByTagName('head')[0].appendChild(link_datatables);

//   var script_datatables = document.createElement('script');
//   script_datatables.src = '//cdn.datatables.net/2.2.1/js/dataTables.min.js';
//   script_datatables.setAttribute('type', 'text/javascript');
//   script_datatables.setAttribute('charset', 'utf8');

//   script_jquery.onload = () => {
//     document.getElementsByTagName('body')[0].appendChild(script_datatables);
//   };

//   function checkReady(callback) {
//     if (window.jQuery && $.fn.DataTable) {
//       callback(jQuery);
//     } else {
//       setTimeout(() => checkReady(callback), 50);
//     }
//   }

//   function adjustTableColumnWidths() {
//     $("table").each(function() {
//       const table = $(this);
//       const colWidths = [];

//       // Find max width for each column
//       table.find("tr").each(function() {
//         $(this).find("td, th").each(function(colIndex) {
//           const cellContent = $(this).clone().find("a").replaceWith(function() { return $(this).text(); }).end().text();
//           const cellWidth = getTextWidth(cellContent, $(this).css("font"));
//           colWidths[colIndex] = Math.max(colWidths[colIndex] || 0, cellWidth);
//         });
//       });

//       // Apply max width to each column
//       table.find("tr").each(function() {
//         $(this).find("td, th").each(function(colIndex) {
//           $(this).css("min-width", colWidths[colIndex] + "px");
//         });
//       });

//       console.log("Column widths adjusted:", colWidths);
//     });
//   }

//   function getTextWidth(text, font) {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     context.font = font || "16px Arial"; 
//     return context.measureText(text).width + 10;
//   }

//   function initializeDataTables() {
//     $(document).ready(function() {
//       $("table").each(function() {
//         $(this).addClass("row-border order-column display");
//         if (!$(this).find("tfoot").length) {
//           const footer = $("<tfoot><tr></tr></tfoot>");
//           $(this)
//             .find("thead th")
//             .each(function() {
//               footer.find("tr").append('<th><input type="text" placeholder="" /></th>');
//             });
//           $(this).append(footer);
//         }
//       });

//       $("table").each(function() {
//         if (!$.fn.dataTable.isDataTable(this)) {
//           const config = {
//             dom: '<"top"Plf>rt<"bottom"ip>',
//             searchPanes: { cascadePanes: true },
//             select: true,
//             stripeClasses: ["even", "odd"],
//             initComplete: function() {
//               const api = this.api();
//               api.columns().every(function() {
//                 const column = this;
//                 const header = $(column.header());
//                 const footerCell = $(column.footer());
//                 const input = $('<input type="text" placeholder="' + header.text() + '" style="width: 100%; border: 1px solid;" />')
//                   .on("keyup change", function() {
//                     column.search(this.value).draw();
//                   });
//                 footerCell.html(input);
//               });

//               adjustTableColumnWidths();
//             },
//           };

//           $(this).DataTable(config);
//         }
//       });

//       adjustTableColumnWidths();
//     });
//   }

//   function observeDOMChanges() {
//     const observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//         if (mutation.type === "childList") {
//           initializeDataTables();
//         }
//       });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//   }

//   function handleButtonClick(event) {
//     const button = event.target.closest("button");
//     if (button) {
//       const targetUrl = button.getAttribute("data-href");
//       if (targetUrl) {
//         event.preventDefault();
//         window.history.pushState({}, "", targetUrl);
//         loadContent(targetUrl);
//       }
//     }
//   }

//   function loadContent(targetUrl) {
//     $.ajax({
//       url: targetUrl,
//       type: "GET",
//       success: function(response) {
//         document.getElementById("main-content").innerHTML = response;
//         initializeDataTables();
//       },
//       error: function() {
//         alert("Error loading page content.");
//       },
//     });
//   }

//   document.addEventListener("click", handleButtonClick);

//   script_datatables.onload = () => {
//     checkReady(($) => {
//       initializeDataTables();
//       if (window.app && typeof window.app.on === "function") {
//         window.app.on("navigated", () => {
//           initializeDataTables();
//         });
//       }
//       observeDOMChanges();
//     });
//   };
// })();


(function() {
  // Load jQuery script
  var script_jquery = document.createElement('script');
  script_jquery.src = '//code.jquery.com/jquery-3.7.1.js';
  script_jquery.setAttribute('type', 'text/javascript');
  script_jquery.setAttribute('charset', 'utf8');
  document.getElementsByTagName("body")[0].appendChild(script_jquery);

  // Load DataTables CSS
  var link_datatables = document.createElement('link');
  link_datatables.setAttribute('rel', 'stylesheet');
  link_datatables.setAttribute('href', '//cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css');
  link_datatables.setAttribute('type', 'text/css');
  document.getElementsByTagName('head')[0].appendChild(link_datatables);

  // Load DataTables script
  var script_datatables = document.createElement('script');
  script_datatables.src = '//cdn.datatables.net/2.2.1/js/dataTables.min.js';
  script_datatables.setAttribute('type', 'text/javascript');
  script_datatables.setAttribute('charset', 'utf8');

  // Load DataTables only after jQuery is fully loaded
  script_jquery.onload = () => {
    document.getElementsByTagName('body')[0].appendChild(script_datatables);
  };

  // Function to check if both jQuery and DataTables are available
  function checkReady(callback) {
    if (window.jQuery && $.fn.DataTable) {
      callback(jQuery);
    } else {
      setTimeout(() => checkReady(callback), 50);
    }
  }

  // Function to initialize DataTables with custom columnDefs and stripeClasses
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
            dom: '<"dt-layout-row"l<"dt-layout-row"f>>rt<"dt-layout-row"ip>',
            searchPanes: { cascadePanes: true },
            select: true,
            stripeClasses: ["even", "odd"],
            initComplete: function() {
              const api = this.api();
              api.columns().every(function() {
                const column = this;
                const header = $(column.header());
                const footerCell = $(column.footer());
                const input = $('<input type="text" placeholder="' + header.text() + '" style="width: 100%; border: 1px solid;" />')
                  .on("keyup change", function() {
                    column.search(this.value).draw();
                  });
                footerCell.html(input);
              });

              adjustTableColumnWidths();
            },
          };

          $(this).DataTable(config);

          // Ensure dt-layout-row is applied after initialization
          $(this).closest(".dataTables_wrapper").find(".dataTables_length, .dataTables_filter").wrapAll('<div class="dt-layout-row"></div>');
          $(this).closest(".dataTables_wrapper").find(".dataTables_info, .dataTables_paginate").wrapAll('<div class="dt-layout-row"></div>');
        }
      });

      adjustTableColumnWidths();
    });
  }

  // Function to adjust the column widths based on the content
  function adjustTableColumnWidths() {
    $("table").each(function() {
      const table = $(this);
      const rows = table.find("tbody tr");
      const columns = table.find("thead th");

      columns.each(function(index) {
        let maxWidth = 0;
        rows.each(function() {
          const cell = $(this).find("td").eq(index);
          const cellContent = cell.html().trim();
          const cellWidth = getCellWidth(cellContent);
          maxWidth = Math.max(maxWidth, cellWidth);
        });

        columns.eq(index).css("width", maxWidth + "px");
        table.find("td:nth-child(" + (index + 1) + ")").css("width", maxWidth + "px");
      });
    });
  }

  // Helper function to calculate content width based on cell content
  function getCellWidth(content) {
    const dummyDiv = $("<div>").css({
      visibility: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
      padding: "10px",
    }).text(content);

    $("body").append(dummyDiv);
    const width = dummyDiv.width();
    dummyDiv.remove();
    return width;
  }

  // Function to observe DOM changes and reinitialize DataTables
  function observeDOMChanges() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          initializeDataTables(); // Reinitialize DataTables when new content is detected
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Function to handle the button click for internal navigation (without refreshing)
  function handleButtonClick(event) {
    const button = event.target.closest('button');  // Find the closest button element
    if (button) {
      // Get the custom link stored in a data attribute of the button
      const targetUrl = button.getAttribute('data-href');
      
      if (targetUrl) {
        // Prevent the default behavior (refresh)
        event.preventDefault();

        // Update the browser's address bar using pushState
        window.history.pushState({}, '', targetUrl);

        // Instead of redirecting immediately, load content via AJAX
        loadContent(targetUrl); // Load content dynamically via AJAX
      }
    }
  }

  // Function to simulate content loading for internal navigation
  function loadContent(targetUrl) {
    // For the sake of simplicity, we'll use a basic AJAX request to fetch new content.
    // This can be modified based on how your pages are structured.
    $.ajax({
      url: targetUrl,
      type: 'GET',
      success: function(response) {
        // Replace the current content with the new content (can be customized)
        document.getElementById('main-content').innerHTML = response;

        // Initialize DataTables for new content
        initializeDataTables();
      },
      error: function() {
        alert("Error loading page content.");
      }
    });
  }

  // Add event listener to the document and use event bubbling
  document.addEventListener('click', handleButtonClick);

  // Initialize everything once DataTables script is loaded
  script_datatables.onload = () => {
    checkReady(($) => {
      initializeDataTables(); // Initialize DataTables once everything is ready

      // Re-initialize tables on page navigation if needed (via app.on)
      if (window.app && typeof window.app.on === 'function') {
        window.app.on('navigated', () => {
          initializeDataTables(); // Re-initialize on navigation
        });
      }

      // Start observing DOM changes to handle dynamic content
      observeDOMChanges();
    });
  };
})();


