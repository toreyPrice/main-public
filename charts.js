window.onload = function() {
  var data = JSON.parse(document.getElementById("graph-data").textContent);
  var div = document.getElementById("graph-div");
  // div.insertAdjacentHTML('beforeend', `
  //   <div id="chart-1" style="width:600px;height:250px;display:inline-block;"></div>
  //   <div id="chart-2" style="width:600px;height:250px;display:inline-block;"></div>
  //   `)

  Plotly.newPlot(document.getElementById('chart-1'), 
    [{x: data.g1.x1,y: data.g1.y1,type: 'line'},
    {x: data.g1.x1,y: data.g1.y2,type: 'line'}], 
    {margin: { t: 0 }},
    {displayModeBar: false}
    );
  Plotly.newPlot(document.getElementById('chart-2'), 
    [{x: data.g2.x1,y: data.g2.y1,type: 'line'},
    {x: data.g2.x1,y: data.g2.y2,type: 'line'}], 
    {margin: { t: 0 }},
    {displayModeBar: false}
    );
}
