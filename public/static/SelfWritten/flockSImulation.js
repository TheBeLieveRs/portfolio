console.log("hi")


window.onload = function() { paper.setup('flockCanvas'); console.log("windowLoaded"); 


var path = new paper.Path({strokeColor : '#E4141B',
strokeWidth: 20,
strokeCap: 'round'});


var points = [new paper.Point(0,0), new paper.Point(100,100)]

path.add(points[0]);
path.add(points[1]);

path.strokeColor = '#e4141b';
path.strokeWidth = 20;






}


