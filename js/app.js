$(document).ready(function() {
  // Load the JSON data with AJAX
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
      // Transform the JSON data into an array of objects
      var dataArray = [];
      for (var i = 0; i < data.length; i++) {
        var rowData = data[i];
        var rowArray = [];
        for (var j = 0; j < rowData.length; j++) {
          rowArray.push(rowData[j]);
        }
        dataArray.push(rowArray);
      }

      // Initialize DataTables with the transformed data
      $('#myTable').DataTable({
        data: dataArray,
        columns: [
          { title: 'Column 1' },
          { title: 'Column 2' }
        ]
      });
    }
  });
});

