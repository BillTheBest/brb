Keen.ready(function() {

  // ADD CREDENTAILS HERE
  var keenClient = new Keen({
    projectId: "<your-project-id>",
    readKey: "<your-read-key>"
  });

  var count = new Keen.Query("count", {
    eventCollection: "button-presses",
    groupBy: "color"
  });

  keenClient.draw(count, document.getElementById("layout-cell-2"), {
    chartType: "piechart",
    colors: ["red", "blue"]
  });

  var series = new Keen.Query("count", {
    eventCollection: "button-presses",
    interval: "minutely",
    groupBy: "color",
    timeframe: "this_30_minutes"
  });

  keenClient.draw(series, document.getElementById("layout-cell-1"), {
    chartType: "linechart",
    colors: ["red", "blue"]
  });

});
