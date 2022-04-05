array_1=["pen","paper","book","bottle"];
random_no = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_no];
console.log(Element_of_array);


timer_counter = "";
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = "";

function setup(){
    canvas = createCanvas(200, 200);
    canvas.center();
    background("white");
}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWieght(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pMouseX, pMouseY, mouseX, mouseY);
    }
    check_skecth()
}
function check_skecth(){
    timer_counter++;
    document.getElementById('Timer').innerHTML = 'Timer:' + Timer_counter;
}
