$(document).ready(function() {
  // Load the JSON data with AJAX
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
      // Transform the JSON data into an array of objects
      var dataArray = [];
      for (var i = 0; i < data.data.length; i++) {
        var rowData = data.data[i];
        var rowObject = {
          "dateDeath": rowData.dateDeath,
          "nameFirst": rowData.nameFirst,
          "nameLast": rowData.nameLast,
          "nokFirst": rowData.nokFirst,
          "nokLast": rowData.nokLast,
          "nokType": rowData.nokType,
          "nokEmail": rowData.nokEmail
        };
        dataArray.push(rowObject);
      }

      // Initialize DataTables with the transformed data
      $('#myTable').DataTable({
        data: dataArray,
        columns: [
          { title: 'Date of Death', data: 'dateDeath' },
          { title: 'First Name', data: 'nameFirst' },
          { title: 'Last Name', data: 'nameLast' },
          { title: 'NOK First', data: 'nokFirst' },
          { title: 'NOK Last', data: 'nokLast' },
          { title: 'NOK Type', data: 'nokType' },
          { title: 'NOK Email', data: 'nokEmail' }
        ]
      });
    }
  });
});
