/** ELEMENTS TO BE DRAGGED HERE **/
dragElement(document.getElementById('watch'));

/* FUNCTION */
function dragElement (elmt){
   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   if (document.getElementById(elmt.id + "_Drag")) {
        document.getElementById(elmt.id + "_Drag").onmousedown = dragMouseDown;
   } else {
       elmt.onmousedown = dragMouseDown;
   }

   function dragMouseDown (e){
        e = e || window.event;
        //get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
   }

   function elementDrag(e){
        e = e || window.event;
        //calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        //set the element's new position:
        elmt.style.top = (elmt.offsetTop - pos2) + "px";
        elmt.style.left = (elmt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}