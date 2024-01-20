sliced_otu_ids =[];
otu_ids_toplot_x = [];  
let option;
var dropdown = d3.select("selDataset");
keyval =[];
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data)
{
    console.log(data);
    var names = data.samples.map(x=>x.id);     
    var otu_ids = data.samples.map(x=>x.otu_ids); /*long list of otu_ids int */
    slice1 = otu_ids[0].slice(0, 10);
    sliced_otu_ids.push(slice1);  /* short list of otu_ids*/
    new_Otu_ids = sliced_otu_ids[0];  /* just the otu id values without the key(0) in an array  */
    var otu_labels = data.samples.map(y=>y.otu_labels); /*long list of otu labels  */
    slice2_otu_labels = otu_labels[0].slice(0,10); /*short list of otu labels  */
    var sample_values = data.samples.map(z=>z.sample_values)    /*long list of sample values dictionary  */ 
    names.forEach(function(name){
        d3.select("#selDataset")
        .append('option')
        .text(name)
    }); /* put the name list of ids in dropdown menu*/
    console.log("sliced 0-10",new_Otu_ids);
    console.log("otu_labels first 10", slice2_otu_labels);
    
/* first 10 OTU found 1 individual sorted by desc*/
    for(let j =0; j<=otu_ids.length;j++){
    first_Num = sliced_otu_ids[j];
    second_Num = sliced_otu_ids[j+1]
    /* sorting otu_ids */
    sorted_otu_ids = new_Otu_ids.sort(function sortFunction(first_Num, second_Num){ return second_Num - first_Num}); 
   }
   /*sample metadata in demographic data */
   var metadata = data.metadata.map(x=>x);
   /*slicing the first 10 dictionaries in metadata  and then selecting the first dictionary in first_metadata */
   slice3 = metadata.slice(0,10);
   first_metadata = slice3[0];
   console.log("slice metadata to the first 10 to the first dictionary", first_metadata);
   /* clear the demographic data text area */
   d3.select("#sample-metadata").html("");
   /*use forEach to iterate through the dictionary in metadata  */
   Object.entries(first_metadata).forEach(([key, value])=> {console.log(key, value)
   /* display metadata for id 940 in demographic data  */
   d3.select("#sample-metadata").append("ul").text(`${key} : ${value}`);
   });
   /* build a bar chart */
   slice4 = sample_values.slice(0,10);
   first_sample_value = slice4[0]
   first_ten_samplevalues = first_sample_value.slice(0,10);
   for(x of new_Otu_ids){
    otu_ids_toplot_x.push("OTU " + x);
   }
   console.log("otu +OtuIDs", {otu_ids_toplot_x});
  /* getting data ready to plot */
   var data_viz = [{
    type  : 'bar',
    y: otu_ids_toplot_x,
    x: first_ten_samplevalues,
    base:0,
    orientation:'h',
    text : slice2_otu_labels,
    marker : {
        color: '#C8A2C8',
        line: {
            width: 2.5
            }
        }
  }];
   var layout = {
        title: 'OTU ID and sample values',
        hovermode: "closest",
        height : 400,
        weight :600
        };
        var config = {responsive:true};
    Plotly.newPlot('bar_div', data_viz, layout, config);
});
/*bubble chart beginning*/
 d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data)
{
    console.log(data);
    xval = data.samples.map(x=>x.otu_ids);
    sliced_1 = xval[0].slice(0,10);
    new_xval = sliced_1;
    yval = data.samples.map(y=>y.sample_values);
    s_val = yval.slice(0,10);
    sliced_sampleval = s_val[0];
    new_yval = sliced_sampleval.slice(0,10);
    labels = data.samples.map(z=>z.otu_labels);
    sliced_labels = labels.slice(0,10);
    labels_new = sliced_labels[0];
    console.log("new_xval: ",new_xval);
    console.log("new_yval: ",new_yval);
    /*bubblechart data*/
    xval = new_xval;
    yval = new_yval;
    markersize = new_yval;
    markercolors = ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(150, 101, 135)','rgb(0, 128, 106)', 'rgb(0, 230, 230)'];
    textval = labels_new.slice(0,10);
        var trace1={
            type: "scatter",
            mode: "markers",
            x: new_xval,
            y: new_yval,
            text:textval,
            marker:{size:markersize, sizemode:"area", color:markercolors, opacity:[0.6, 0.7, 0.8, 0.9]}        
            
        };
        var ndata=[trace1];
        var layout={
                title: 'Bubble Chart Size Scaling',
                xlabel: 'OTU ID',
                showlegend: false,
                height: 500,
                width: 900,
                };
        Plotly.plot('bubble',ndata, layout);  
        });  
       
/*
});
    
}); */

    
