window.onload = function() {
  var data = JSON.parse(document.getElementById("graph-data").textContent);
  var template = JSON.parse(document.getElementById("graph-data-template").textContent);
  var diiv = document.getElementById("graph-div");
  
  var st = template.style
  var el = template.elements
  var ch = data.charts

  for (let i = 0; i < st.length; ++i) {
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerHTML = '.'+st[i].class+' { '+st[i].settings+' }'
    document.getElementsByTagName('head')[0].appendChild(s);
    }
  for (let i = 0; i < el.length; ++i) {
    if (el[i].type == "div") {
      var e = document.createElement("div")
      e.id = el[i].id;
      e.className = el[i].class
      e.innerHTML = el[i].html
      document.getElementById(el[i].parent).appendChild(e)
    }else if (el[i].type == "img"){
      var e = document.createElement("img")
      e.id = el[i].id;
      e.className = el[i].class;
      e.src = el[i].src;
      document.getElementById(el[i].parent).appendChild(e)
    }
  }
  for (let i = 0; i < ch.length; ++i) {
    if (ch[i].type == "simple-xy") {
      var li = []
      var y = ch[i].y
      for (let j = 0; j < y.length; ++j) {
        li.push({"x": ch[i].x,"y": y[j].data,"mode": y[j].mode,"marker":{"color":y[j].color},"line":{"color":y[j].color},"name": y[j].name})
      }
      Plotly.newPlot(document.getElementById(ch[i].parent), 
          li, 
         {margin: { t: 1, r: 1, l: 1, b: 1 }, 
          legend:{y: -0.15,x: 0.5,xanchor:'center',orientation: 'h'}, 
          dragmode: false,xaxis:{showgrid:false},yaxis:{showgrid:false}},
         {displayModeBar: false, responsive: true}
        );
    }else if (ch[i].type == "bar-colored"){
      var li = []
      var y = ch[i].y

      for (let j = 0; j < y.length; ++j) {
        var actual_colors = []
        var coded_colors = y[j].color
        
        for (let k = 0; k < coded_colors.length; ++k) {
          if(coded_colors[k] == "c1"){var mapped_color = y[j].map.c1}
          else if(coded_colors[k] == "c2"){var mapped_color = y[j].map.c2}
          else if(coded_colors[k] == "c3"){var mapped_color = y[j].map.c3}
          else{var mapped_color = "#000000"};
          
          actual_colors.push(mapped_color)
        }
        li.push({"x": ch[i].x,"y": y[j].data,"type": "bar", marker:{color:actual_colors}})
      }
      Plotly.newPlot(document.getElementById(ch[i].parent), 
          li, 
         {margin: { t: 1, r: 1, l: 1, b: 1 }, 
          legend:{y: -0.15,x: 0.5,xanchor:'center',orientation: 'h',showlegend: false}, 
          dragmode: false,xaxis:{showgrid:false},yaxis:{showgrid:false}},
         {displayModeBar: false, responsive: true}
        );
    }else if (ch[i].type == "bar-pivot"){
      var li = []
      var n = ch[i].series
      for (let j = 0; j < n.length; ++j) {
        li.push({"type": "bar","orientation": 'h',"y": n[j].y,"x": n[j].x,"name": n[j].name,"marker":{"color":n[j].color, "width":n[j].width}})
        }
      Plotly.newPlot(document.getElementById(ch[i].parent),
        li,
        {barmode: 'stack', margin: { t: 1, r: 1, l: 1, b: 1 },showlegend: false},
        {displayModeBar: false, responsive: true}
        );
    }else if (ch[i].type == "pill-delta"){
      Plotly.newPlot(document.getElementById(ch[i].parent),
        [{type: "indicator",mode: "number+delta",value: ch[i].value,
          delta: { reference: ch[i].ref, relative: true, position: "right", valueformat: ",.1%"},
          number: {font:{size:25},valueformat: ',',prefix: ch[i].prefix, suffix:ch[i].suffix},align: ch[i].align}],
        {height: 50, margin: { t: 1, r: 1, l: 1, b: 1 },paper_bgcolor: "rgba(0,0,0,0)",plot_bgcolor: "rgba(0,0,0,0)"},
        {displayModeBar: false, responsive: true}
        )
    }else if (ch[i].type == "pill"){
      Plotly.newPlot(document.getElementById(ch[i].parent),
        [{type: "indicator",mode: "number",value: ch[i].value,
          number: {font:{size:ch[i].size},valueformat: ',',prefix: ch[i].prefix, suffix:ch[i].suffix},align: ch[i].align}],
        {height: 50, margin: { t: 1, r: 1, l: 1, b: 1 },paper_bgcolor: "rgba(0,0,0,0)",plot_bgcolor: "rgba(0,0,0,0)"},
        {displayModeBar: false, responsive: true}
        )
    }else if (ch[i].type == "text"){
      var e = document.getElementById(ch[i].parent);
      e.innerHTML = ch[i].value;
      e.style.backgroundColor = ch[i].bgcolor
      e.style.color = ch[i].textcolor
    }
  }
}
