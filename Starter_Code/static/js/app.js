n =[];
let option;
var dropdown = d3.select("selDataset");
function init(){
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data){
    console.log(data);
    var names = data.samples.map(x=>x.id);     
    var otu_ids = data.samples.map(x=>x.otu_ids);
    var otu_labels = data.samples.map(y=>y.otu_labels);
    var sample_values = data.samples.map(z=>z.sample_values)     
    names.forEach(function(name){
        d3.select("#selDataset")
        .append('option')
        .text(name)
    });
    

}); 
};
init();
/* first 10 OTU found 1individual sorted by asc or desc*/

/*sample metadata in demographic data */