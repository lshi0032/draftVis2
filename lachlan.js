var vg_1 = "chloroplethandline.vl.json"; 
vegaEmbed("#map_line", vg_1).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_2 = "scatterplotcondomvsinfected.vl.json"; 
vegaEmbed("#scatterplot", vg_2).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_3 = "spine_chart.vl.json"; 
vegaEmbed("#spinechart", vg_3).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_4 = "stackedbar.vl.json"; 
vegaEmbed("#stackedbar", vg_4).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);