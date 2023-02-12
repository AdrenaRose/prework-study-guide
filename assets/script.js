/*var topics = "Programming, HTML, CSS, Git, JavaScript";
/*created variable called topics, which contains a string that includes the topics covered so far
/*strings are always contained in quotation marks
/*each line of JS ends with a semicolon
*/
/*console.log(topics);
/*console.log() - console refers to a test environment developers use to check code
.log() is a method, or a set of instructions that can be executed by a computer
the .log() method outputs whatever we add inside the parentheses to the console*/
var topics = ["Programming", "HTML", "CSS", "Git", "JavaScript"];
for (x = 0; x < topics.length; x++) {
  console.log(topics[x]);
}

/*
if (topic === "Programming") {
  console.log("Let's study Programming!");
} else if (topic === "HTML") {
  console.log("Let's study HTML!");
} else if (topic === "CSS") {
  console.log("Let's study CSS!");
} else if (topic === "Git") {
  console.log("Let's study Git!");
} else if (topic === "JavaScript") {
  console.log("Let's study JavaScript!");
} else {
  console.log("Please try again!");
}

/*Array
var shapes = ["triangle", "square", "pentagon", "circle"];
/*console.log(shapes[0]);
/*Will output "triangle" as arrays are zero-indexed and sequential*/

/*for loops contain three important statements
first statement determines starting point by declaring a variable and giving it a value*/
/*var x = 0;
/*second statement is the condition*/
/*x < shapes.length;
/*third statement is what allows the array to iterate over each item*/
/*x++ (a shortcut for x+1)
for (
  var x = 0;
  x < shapes.length;
  x++
) /*every time the code loops, x will increase by 1 {
  console.log(shapes[x]); /*log shapes[array identifier]
}
/*When computer hits the for loop it will start with x being 0, since x is less than the length of the shapes, it will run the code inside the loop and log the value of shapes[0] in the console.
Then, it will increment x, so now x is 1 and the loop starts over. This repeats until x is 4 (the length of the array) making x===.length. This stops the loop.*/
