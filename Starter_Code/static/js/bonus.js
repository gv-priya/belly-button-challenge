
    var gaugedata = [{
        domain:{x: [0,1], y:[0,1]},
        type: "indicator",
        mode: "gauge+number+delta",
        title:{text: "Belly-Button Washing Frequency " +'\n' +"Scrubs Per Week", font:{size:12}},
        delta:{reference:8},
        gauge:{
            axis:{range:[null, 9], tickwidth:1,tickcolor:"black"},
            bgcolor: "#FFF7CC",
            borderwidth: 2,
            bordercolor: "blue",
            steps:[
                {range:[0, 1], color: "#FFF7CC"},
                {range:[1, 2], color: "#FFDD99"},
                {range:[2, 3], color: "#FFEA80"},
                {range:[3, 4], color: "#FFDD33"},
                {range:[4, 5], color: "#FFD500"},
                {range:[5, 6], color: "#669900"},
                {range:[6, 7], color: "#00B31E"},
                {range:[7, 8], color: "#004D0D"},
                {range:[8, 9], color: "#00331A"}
            ], 
            text: ["0-1", "1-2", "2-3", "3-4","4-5","5-6", "6-7","7-8","8-9",""],
            direction:"clockwise",
            textinfo: "text",
            textposition: "inside" 
        }
    }];
    var layout = {width:300, height: 350, margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    font: { color: "darkblue", family: "Arial" }};
    Plotly.newPlot('gauge',gaugedata, layout);

