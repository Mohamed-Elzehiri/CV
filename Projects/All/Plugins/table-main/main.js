
    // Delete row function
    function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }
  
      // Move row up function
      function moveRowUp(btn) {
        var row = btn.parentNode.parentNode;
        if (row.rowIndex > 1) {
          row.parentNode.insertBefore(row, row.previousSibling);
        }
      }
  
      // Move row down function
      function moveRowDown(btn) {
        var row = btn.parentNode.parentNode;
        if (row.rowIndex < row.parentNode.rows.length - 1) {
          row.parentNode.insertBefore(row.nextSibling, row);
        }
      }
  
      // Add new row function
      function addNewRow() {
        var table = document.getElementById("data-table");
        var row = table.insertRow(-1);
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var emailCell = row.insertCell(2);
        var numberCell = row.insertCell(3);
        var codeCell = row.insertCell(4);
        var deleteCell = row.insertCell(5);
        var moveCell = row.insertCell(6);
  
        idCell.contentEditable = true;
        nameCell.contentEditable = true;
        emailCell.contentEditable = true;
        numberCell.contentEditable = true;
        codeCell.contentEditable = true;
  
        deleteCell.innerHTML = '<span class="delete-btn" onclick="deleteRow(this)">مسح</span>';
        moveCell.innerHTML = '<span class="row-move" onclick="moveRowUp(this)">للأعلى  ▲            </span><span class="row-move" onclick="moveRowDown(this)">        ▼     لأسفل</span>';
      }
  
      // Search table function
      function searchTable() {
        var input = document.getElementById("search-input").value.toLowerCase();
        var table = document.getElementById("data-table");
        var rows = table.getElementsByTagName("tr");
  
        for (var i = 1; i < rows.length; i++) {
          var found = false;
          var cells = rows[i].getElementsByTagName("td");
          
          for (var j = 0; j < cells.length; j++) {
            var cell = cells[j];
            
            if (cell.innerHTML.toLowerCase().indexOf(input) > -1) {
              found = true;
              break;
            }
          }
          
          if (found) {
            rows[i].style.display = "";
          } else {
            rows[i].style.display = "none";
          }
        }
      }
    