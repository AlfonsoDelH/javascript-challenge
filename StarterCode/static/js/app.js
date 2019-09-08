// from data.js
var tableData = data;
// YOUR CODE HERE!

var tbody = d3.select('tbody');

tableData.forEach(data => {
    var tr = tbody.append('tr');
    tr.append('td').text(data.datetime);
    tr.append('td').text(data.city);
    tr.append('td').text(data.state);
    tr.append('td').text(data.country);
    tr.append('td').text(data.shape);
    tr.append('td').text(data.durationMinutes);
    tr.append('td').text(data.comments);
});

var button = d3.select('#filter-btn');

button.on('click', function() {
    d3.event.preventDefault();
    d3.selectAll("td").remove();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filtered_data=data.filter(dataFilter=> dataFilter.datetime === inputValue);
    filtered_data.forEach((filData) => {
        var row = tbody.append("tr");
        Object.entries(filData).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
});