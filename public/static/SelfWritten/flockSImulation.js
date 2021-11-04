/// <reference path="../Libraries/paper-full.js" />

// const paper = require("../Libraries/paper-full");

var mx,my;
var maxPoints  = 5;
var points = [];

window.onload = function() { paper.setup('flockCanvas'); console.log("windowLoaded"); 


var path = new paper.Path({strokeColor : '#E4141B',
strokeWidth: 20,
strokeCap: 'round'});


path.add(points[0]);
path.add(points[1]);

path.strokeColor = '#e4141b';
path.strokeWidth = 20;



window.onmousemove= function(event)
{
    mx = event.x;
    my =event.y;
    // console.log(mx + " " + my);
    if(points.length< maxPoints)
    {
        points.push(new paper.Point(mx,my));
        
    }
    else
    {
        points.shift();
        points.push(new paper.Point(mx,my));
    }

    path.removeSegments(0,path.segments.length,true);
    for (var i =0; i< maxPoints;i++)
    {
        path.add(points[i]);
    }
}





}






