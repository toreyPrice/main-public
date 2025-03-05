function Test(data){
  Plotly.newPlot(document.getElementById('tester'), 
    [{x: data.g1.x1,y: data.g1.y1,type: 'line'},
    {x: data.g1.x1,y: data.g1.y2,type: 'line'}], 
    {margin: { t: 0 }},
    {displayModeBar: false}
    );
  Plotly.newPlot(document.getElementById('tester2'), 
    [{x: data.g2.x1,y: data.g2.y1,type: 'line'},
    {x: data.g2.x1,y: data.g2.y2,type: 'line'}], 
    {margin: { t: 0 }},
    {displayModeBar: false}
    );
  }
document.onload = Test(data)
