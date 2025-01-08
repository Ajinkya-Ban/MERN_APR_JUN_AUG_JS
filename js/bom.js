function checkHeight(){
    console.clear();
    var iheight = window.innerHeight;
    var iwidth = window.innerWidth;
    console.log("Inner Height = "+iheight);
    console.log("Inner Width = "+iwidth);
    
    
    var oheight = window.outerHeight;
    var owidth = window.outerWidth;

    console.log("Outer height = "+oheight);
    console.log("Outer Width = "+owidth);
}
//checkHeight()

// the follwoing code can be used for open() and close() window.
let myWindow;
function openWindow() {
    if(!myWindow || myWindow.closed)
    {
        myWindow = window.open(
            "", 
            "", 
            "height=100,width=100,left=100,top=100"
        );
        myWindow.document.write("<p>This from test department</p>");
       
    }
    else
    {
        alert('Window already open');
        myWindow.focus();
    }
    
}
function closeWindow() {
    
    if (myWindow) {
        myWindow.close();
        myWindow = null;
    } else {
        alert("No window to close!");
    }
}


// moveTo() and moveBy:
// ----------------------------
function moveWindow()
{
    myWindow.focus();
    myWindow.moveTo(100,100);
}

function moveWindowBy(){
    myWindow.focus();
    myWindow.moveBy(100,100);

}

// resizeTo() and resizeBy():

function callrsizeTo(){
    myWindow.resizeTo(200,200);
    myWindow.focus();
}

function callrsizeBy(){
    myWindow.resizeBy(200,200);
    myWindow.focus();
}

function callScrollBy(){
    window.scrollBy(0,-20);
}

function callScrollTo(){
   // window.scrollTo(0,0); it will move to top of the window.
   window.scrollTo(0,20);
}



