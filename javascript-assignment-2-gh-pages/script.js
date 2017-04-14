// Do your work in this file.



1. Write a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop to add a click event listener on all divs with class `box`.

1. When the user clicks any box, change that box's background color to one of the following colors.

    - If number of boxes on the page is between **201 and 300**, inclusive, change the background color of the box to **'yellow'**.

    - If number of boxes on the page is between **301 and 400**, inclusive, change the background color of the box to **'green'**.

    - If number of boxes on the page is between **401 and 500**, inclusive, change the background color of the box to **'purple'**.

    - If number of boxes on the page is between **501 and 600**, inclusive, change the background color of the box to **'orange'**.

    - If number of boxes on the page is between **601 and 700**, inclusive, change the background color of the box to **'pink'**.

    - If number of boxes on the page is between **701 and 800**, inclusive, change the background color of the box to **'black'**.

    - If number of boxes on the page is between **801 and 900**, inclusive, change the background color of the box to **'brown'**.

    - Otherwise, change the background color of the box to **'blue'**.


// here is a loop example

var boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClicked);
}

function boxClicked(event) {
    
    var allboxes = boxes.length;

    if (allboxes>800 && allboxes<901) {
        event.target.style.backgroundColor = 'brown';
    } 

    else if (allboxes>700 && allboxes<801) {
        event.target.style.backgroundColor = 'black';
    }

    else if (allboxes>600 && allboxes<701) {
        event.target.style.backgroundColor = 'pink';
    }
    
    else if (allboxes>500 && allboxes<601) {
        event.target.style.backgroundColor = 'orange'; 
    } 
    
    else if (allboxes>400 && allboxes<501) {
        event.target.style.backgroundColor = 'purple';
    }
    
    else if (allboxes>300 && allboxes<401) {
        event.target.style.backgroundColor = 'green';
    }
    
    else if (allboxes>200 && allboxes<301) {
        event.target.style.backgroundColor = 'yellow';
    } 
    
    else {
        event.target.style.backgroundColor = 'blue';       
    }

}




