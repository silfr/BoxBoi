window.onload = function () {
    doStuff();
    var current = 0;
}

window.addEventListener('resize', (ev) => {
    doStuff();
});
var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
var short = Math.min(w, h);
//var cirStroke;
    var cenW = w / 2;
    var cenH = h / 2;
//    var cirRad = short / 5;
//    var innerCircle = cirRad * 2 - (cirStroke * 2) * .8;
    var logo;
var circle;
function doStuff() {

    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    var paper = Raphael("wrap");
    paper.setViewBox(0, 0, w, h, true);


    // ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
    var svg = document.querySelector("svg");
    svg.removeAttribute("width");
    svg.removeAttribute("height");
//    w = document.documentElement.clientWidth;
//    h = document.documentElement.clientHeight;
    short = Math.min(w, h);
    
    cenW = w / 2;
    cenH = h / 2;
    circle = document.getElementById("svg3985");
    
    
    circle.style.height = cenH + "px";
    
    
   /* if (w > h) {
        circle.style.height = cenH + "px";
    }
    else {
        circle.style.width = cenW + "px";
    }
    */
//    logo = paper.image("images/logo.svg", cenW, cenH, 1013, 344);
//    logo.node.id = 'theLogo';
//    var logoDOM = document.getElementById("theLogo");
    
    
    /*cirStroke = 32;
    cirRad = short / 4;
    innerCircle = (cirRad * 2 - (cirStroke * 2)) * 1;
    var circle = paper.circle(w / 2, h / 2, cirRad);
    circle.id = 1;
    circle.attr({
        stroke: '#99E6FF',
        "stroke-width": cirStroke
    })
    var crcl = document.getElementById("crcl");
    var crcl = paper.getById(1);
    document.getElementById("crcl").style.visibility = "hidden";*/

    cbox = circle.getBoundingClientRect();
    console.log(cbox);
    
    
    
//    logo.preserveAspectRatio = true;
//    logo.scale(.5, .5, cenW, cenH);
//    logo.setAttribute("width", "100");
//    innerCircle = circle.innerWidth * .8;
    
//    logo.style.width = innerCircle;
//    logo.style.height = innerCircle / 1013 * 344;
    
//    logo.translate(logo.width / -2, logo.height / -2);
    
    
    
/*    var toparr = paper.path("M" + cenW + ", 0 l 0 0");
    toparr.attr({

        stroke: '#808080',
        "stroke-width": 8,
        "arrow-end": 'open',
        "stroke-linecap": 'square'
    })
    toparr.animate({
        stroke: '#808080',
        path: "M" + cenW + ", 0 l 0 " + (cbox.top - 32)
    }, 1000, 'elastic');

    current = 1;

    var botarr = paper.path("M" + cenW + ", " + h + " l 0 0");
    botarr.attr({

        stroke: '#808080',
        "stroke-width": 8,
        "arrow-end": 'open',
        "stroke-linecap": 'square'
    })*/

//        var p = paper.path("M0 " + (h / 2) + "l 2000 0");
/*
    var pixel = paper.text(w / 2, (h / 2) - 16, "Pixel");
pixel.attr({
    "font-family": 'monospace',
    "font-size": 64

})
pixel.node.setAttribute("id", "pxl");

var proximity = paper.text(w / 2, (h / 2) + 16, "PROXIMITY");
proximity.attr({
    "font-family": 'Futurist, monospace',
    "font-size": 32,
    fill: 'gray'
})
proximity.node.setAttribute("id", "pxmty");

rect1 = pxmty.getBoundingClientRect();
rect2 = pxl.getBoundingClientRect();
var pink = paper.path("M" + (rect1.left - 16) + " " + (rect1.bottom + 16) + " L" + (rect1.left - 16) + " " + rect2.top);
pink.attr({
    stroke: 'pink',
    "stroke-width": 4,
    "arrow-end": 'open',
    "stroke-linecap": 'square'

})
var blue = paper.path("M" + (rect1.left - 16) + " " + (rect1.bottom + 16) + " L" + (rect1.right + 16) + " " + (rect1.bottom + 16));
blue.attr({
    stroke: '#99E6FF',
    "stroke-width": 4,
    "arrow-end": 'open',
    "stroke-linecap": 'square'
})

var blend = paper.rect((rect1.left - 18), (rect1.bottom + 14), 4, 4)
blend.attr({
    fill: '#CCD3E5',
    "stroke-width": 0
})*/


    var fontSize = short / 25;
//    var email = paper.text(w / 2, h / 2 + fontSize * 1.5 + cirRad, "🖂");
//        var email = paper.text(w / 2, cbox.bottom + fontSize, "🖂");
//    console.log(cirRad);
//    console.log(cirStroke);
      var email = paper.text(w / 2, (short * .75) + fontSize, "🖂");

//    var email = paper.text(w / 2, )
//    var email = paper.text(cbox.right + fontSize, h / 2, "🖂");

    email.attr({
        "font-family": 'Courier, monospace',
        "font-size": fontSize
    })
    
    
    /*
    email.rotate(-90);
    email.rotate(-90, cenW, cenH);*/
//    
//    email.translate(0, fontSize);
    
    email.node.setAttribute("id", "eml");
    email.node.setAttribute("class", "orange");
    
/*
    email.node.onclick = function () {

        if (current == 1) {

            toparr.animate({
                path: "M" + (w / 2) + " 0 l 0 0"
            }, 250, '<>');

            botarr.animate({
                path: "M" + (w / 2) + " " + h + " L " + (w / 2) + " " + (eml.getBoundingClientRect().bottom + 20)
            }, 500, 'bounce');

            //            main.animate({
            //        stroke: '#99E6FF',
            //        path: "M" + (w / 2) + ", 0 l 0 " + (cbox.top - 32)
            //    }, 1000, 'elastic');

        }
    }*/

//    var projects = paper.text(w / 2, h / 2 + fontSize * 1.5 + cirRad, "Projects");
    var projects = paper.text(cbox.left - fontSize * 3, h / 2, "Projects");

    projects.attr({
        "font-family": 'Courier, monospace',
        "font-size": fontSize
//        translate: (0, this.getComputedStyle("width") / 2 + fontSize)
    })
    
    projects.rotate(-30, cenW, cenH);
//    projects.rotate(-90);
//    projects.translate(fontSize * -3, 0);
//    projects.rotate(-90, cenH, cenW);
//    projects.transform("r-45," + cenH + "," + cenW);
//    projects.translate(cirRad * -.25, 0)

    
    projects.node.setAttribute("id", "prjcts");
    projects.node.setAttribute("class", "orange");

//    var about = paper.text(w / 2, h / 2 + fontSize * 1.5 + cirRad, "About Us");
    var about = paper.text(cbox.right + fontSize * 3, h / 2, "About Us");

    about.attr({
        "font-family": 'Courier, monospace',
        "font-size": fontSize
//        transform: "r45t" + (short / 5) + (short / -5)
    })
    about.rotate(30, cenW, cenH);
//    about.rotate(90);
//    about.translate(fontSize * 3,0);
    
    about.node.setAttribute("id", "abt");
    about.node.setAttribute("class", "orange");
    
    function select(i) {
        $(".orange").removeClass("active");
        $(i).addClass("active");
    }
    
    $(".orange").removeClass("active");
    document.getElementById("eml").firstChild.addClass("active");

    //    draw some random vectors:
    //    var path = "M " + w / 2 + " " + h / 2;
    //    for (var i = 0; i < 100; i++) {
    //        var x = Math.random() * w;
    //        var y = Math.random() * h;
    //        paper.circle(x, y,
    //            Math.random() * 60 + 2).
    //        attr("fill", "rgb(" + Math.random() * 255 + ",0,0)").
    //        attr("opacity", 0.5);
    //        path += "L " + x + " " + y + " ";
    //    }
    //
    //    paper.path(path).attr("stroke", "#ffffff").attr("stroke-opacity", 0.2);

    //    paper.text(200, 100, "Resize the window").attr("font", "30px Arial").attr("fill", "#ffffff");
}
/*var short;
var width;
var height;

window.onload = function () {
    updateViewport();

    function updateViewport() {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        short = Math.min(width, height);
        var paper = new Raphael(ele('canvas_container'), w, h);

        paper.circle((short / 2) + 'px', (short / 2) + 'px', (short / 3) + 'px');

        var circle = paper.circle(100,100,80);
        for (i = 0; i < 5; i++) {
            var multiplier = i * 5;
            paper.circle(250 + (2 * multiplier), 100 + multiplier, 50 - multiplier);
        }
        var rectangle = paper.rect(200, 200, 250, 100);
        var ellipse = paper.ellipse(200, 400, 100, 50);
        //    var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
        //    tetronimo.attr(
        //        {
        //            stroke: 'none',
        //        fill: 'blue'
        //        }
        //    );
        ////        tetronimo.animate({'transform':"r360", 'stroke-width': 1}, 2000, 'bounce');
        //    tetronimo.animate({
        //    path: "M 250 250 l 0 -50 l -50 0 l 0 -50 l -100 0 l 0 50 l 50 0 l 0 50 z"
        //}, 1000, 'elastic');

        //    var circ = paper.circle(250, 250, 40);
        //        circ.attr({fill: '#000', stroke: 'none'});
        //    
        //    var text = paper.text(250, 250, 'Bye Bye Circle!')
        //text.attr({opacity: 0, 'font-size': 12}).toBack();
        //    
        //    circ.node.onmouseover = function() {
        //    this.style.cursor = 'pointer';
        //}
        //    
        //    circ.node.onclick = function() {
        //    text.animate({opacity: 1}, 2000);
        //    circ.animate({opacity: 0}, 2000, function() {
        //        this.remove();
        //    });
        //    }

    }
}

function ele(id) {
    return document.getElementById(id);
}*/