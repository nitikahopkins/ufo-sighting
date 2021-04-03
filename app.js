// from data.js
var tableData = data;
function findUFO() {
  var dateTime = document.getElementById("datetime").value;
  var city = document.getElementById("city").value;
  var tbody = document.getElementById("tbody");
  var tr = "<tr>";

  for (let i = 0; i < data.length; i++) {
    if (data[i].datetime == dateTime || data[i].city == city) {
      tr +=
        "<td>" +
        data[i].datetime +
        "</td>" +
        "<td>" +
        data[i].city +
        "</td>" +
        "<td>" +
        data[i].state +
        "</td>" +
        "<td>" +
        data[i].country +
        "</td>" +
        "<td>" +
        data[i].shape +
        "</td>" +
        "<td>" +
        data[i].duration +
        "</td>" +
        "<td>" +
        data[i].comments +
        "</td>" +
        "</tr>";
      tbody.innerHTML = tr;
    }
  }
}
// YOUR CODE HERE!
