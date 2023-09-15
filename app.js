                                    // CHAPTER==12-13
                                    // Q.NO=1
                                    // ANS:
// var char = prompt("Enter a character:");
// var asciicode = char.charCodeAt(0);
// if (asciicode >= 48 && asciicode <=57) {
// console.log(char +"is a num.");
// }
// else if (asciicode >=65 && asciicode <= 90){
// console.log(char +"is an uppercase latter.");
// }
// else if (asciicode >= 97 && asciicode <= 122) {
// console.log(char +"is lowercase latter.");
// }
// else{
//     console.log(char + " is not a number, uppercase letter, or lowercase letter.");
// }

                                                        //  Q.NO-2
                                                        // Ans:
// var num1 = parseInt(prompt("Enter the first value"));
// var num2 = parseInt(prompt("Enter the second value"));
// if (num1 > num2) {
//     console.log(num1 + "is larger than"+num2)
// }
// else if (num2 > num1) {
//     console.log(num2+"is larger than "+num1)
// }
// else{
//     console.log("Both value is equal")
// }

                                                    //  Q.NO-3
                                                    // Ans:
// var number=parseFloat(prompt("Enter the number:"));
// if (number > 0) {
//     console.log("The number is positive")
// }
// else if(number < 0) {
//     console.log("The number is nagitive")
// }
// else{
//     console.log("The number is zero")
// }

                                                //   Q.NO-4
                                                // Ans:
// var character =prompt("Enter a character:").toLowerCase();
// var vowels =  ['a' , 'e' , 'i' , 'o' , 'u']
// if (vowels.includes(character)) {
//        alert("that chracter is vowel")
//     }
//     else {
//    alert("that is not vowel")
//     }

                                            //  Q.NO-5
                                            // Ans:

// var correctPassword = "jawad"
// var userInput = prompt("Enter your password:");
// if (userInput ==="") {
//     console.log("Please enter your password");
// }
// else if (userInput === correctPassword) {
//     console.log("Correct! your password is matches.");
// }
// else{"incorrect password"}

                                            // Q.NO-6
                                            // Ans:
                        
// var greeting;
// var hour = 13;
// if(hour < 18 ) {
//     greeting ="Good Day";
// }
// else{
//     greeting="Good Evening"
// }
// alert(greeting)

                                    //    Q.NO-7
                                    // Ans:

// var greeting;
// var hour = prompt("time know");
// if (hour <= 12 ) {
//     greeting ="Good day"
// }
// else if(hour > 12 && hour < 17) {
//     greeting ="Good After Noon"
// }
// else if (hour > 17 && hour < 20) {
//       greeting = "Good Evening";
//     } else if (hour > 20) {
//       greeting = "Good Night";
//     } else {
//       greeting = "INvalid In Put Or Time";
//     }
    
//     alert(greeting);
// var input;
// var time(input("Enter the time in 24-hour clock format (e.g., 1900 for 7pm): "))
// if (0 <= time < 600)
//     {print("It's the middle of the night.")}
// elif (600 <= time < 1200) 
// {print("It's morning.")
//     }
// elif (1200 <= time < 1800)
//    { print("It's afternoon.")}
// elif (1800 <= time <= 2359)
//     {print("It's evening.")}
//     // else {
//     //           greeting = "INvalid In Put Or Time";
//     //         }
// alert(input);



// ================================================================================================================================================================================
// ================================================================================================================================================================================




                                                    //   CHAPTER=NO-6-7-8

                                                    // Q.NO-1
                                                    // ANS:

// var a = 10;
// console.log(a);
// document.write("The value of a is:"+ a);

// var a = 10;
// console.log(++a);
// document.write("Now the value of a is :"+ a);

// var a = 11;
// console.log(a++);
// document.write("Now the value of a is :" + a);

// var a = 11;
// console.log(--a);
// console.log(++a);
// document.write("Now the value of a is :" + a);

                                                                        // Q.NO-2
                                                                        // ANS:

// var a = 2,b = 1;
// var ab = --a - --b + ++b + b--;
// console.log(--a);
// console.log(--a - --b);
// console.log(--a - --b + ++b);
// console.log(--a - --b + ++b + b--);
// console.log(a,b);
// document.write("a is: " + a)
// document.write("b is: " + b)
// document.write("Result is : "+a+b)

                                                                    //    Q.NO-3
                                                                    //    ANS:
 
// var userName = prompt("Please enter your name")
// if (userName !== null && userName !== "") {
//     alert(" Hello " + userName + "! Nice to meet you")
// }
// else{
//     alert("Hello, anonymous! Nice to meet you.")
// }


                                                                    //   Q.NO-4-5
                                                                    //   Ans:

/*  var userInput = prompt("Enter a number for the multiplication table (default is 5):");

        // Convert the user input to a number (or use 5 if no input)
        var number = parseFloat(userInput) || 5;

        // Display the multiplication table in the browser
        document.write("<h2>Multiplication Table of " + number + "</h2>");
        document.write("<ul>");

        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            document.write("<li>" + number + " x " + i + " = " + result + "</li>");
        }
        document.write("</ul>"); */

// Second Methode

// let count =  prompt("Enter a number for the multiplication table");
// document.write(`<h1 style="color:red;">Multiplication Table Of ${count} Chart</h1>`)
// for(let i=1; i <= 10; i++){
//         let counter =`${count} X ${i} = ${count * i} `;
//         document.write(`<h1>${counter}</h1>`);
// }




                                                        // Q.NO-6-7
                                                        // ANS:



         // Prompt the user to enter the names of three subjects
        // var subject1 = prompt("Enter the name of the first subject:");
        // var subject2 = prompt("Enter the name of the second subject:");
        // var subject3 = prompt("Enter the name of the third subject:");

        // // Total marks for each subject
        // var totalMarks = 100;

        // // Prompt the user to enter obtained marks for each subject
        // var marks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
        // var marks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
        // var marks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

        // // Calculate total marks and percentage
        // var totalObtainedMarks = marks1 + marks2 + marks3;
        // var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

        // // Display the result in a table
        // document.write("<h2>Result</h2>");
        // document.write("<table border='1'>");
        // document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        // document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
        // document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
        // document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
        // document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtainedMarks + "</td></tr>");
        // document.write("<tr><td>Percentage</td><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr>");
        // document.write("</table>");
    

// =======================================================================================================================================================================
// =======================================================================================================================================================================


                                                            //   CHAPTER = 14-16
                                                            // Q.NO-1
                                                            // ANS:

// var fruitsName = [];

                                                            // Q.NO-2
                                                            // Ans:

// var fruitsNameObject = new Array ();


                                                            // Q.NO-3
                                                            // Ans:

// var fruitsName = ["Apple","Banana","Mango","Orange","Grapes"];

                                                            // Q.NO-4
                                                            // Ans:

// var numbers = [1,2,3,4,5];                                                            

                                                           // Q.NO-5
                                                            // Ans:

// var booleanArray = [true, false, true, true, false];


                                                           // Q.NO-6
                                                            // Ans:


// var mixedArray =["Hello", 3, true, "world", false ,2];                                                           


                                                        //     Q.NO-7
                                                        //     ANS:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Educational Qualifications in Pakistan:</h1>");
// document.write("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write("<h4><li>" + qualifications[i] + "</li></h4>");
// }
// document.write("</ul>");



                                                      //    Q.NO-8
                                                       //     ANS:
   

// var studentNames = ["Jawad", "Ansar", "Fayyaz"];
// var scores = [350, 360 ,370];
// var totalMarks = 500;
// var percentages=[];
// for (var i = 0; i < studentNames.length; i++) {
//         var percentage = (scores[i] / totalMarks) * 100;
//         percentages.push(percentage);
//     }
//     for (var i = 0; i < studentNames.length; i++) {
//         document.write(`<h1>Score of ${studentNames[i]} is ${scores[i]}. Percentage: ${percentages[i].toFixed(2)}%</h1>`);
//     }
    

  
                                                      //     Q.NO-9
                                                      //     ANS:
   
// Initialize an array with color names
/* var colors = ["Red", "Green", "Blue"];

// Display the original array
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// a. Add a color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

// b. Add a color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Purple");

// d. Delete the first color in the array
colors.shift();

// e. Delete the last color in the array
colors.pop();

// f. Add a color at a specific index
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter the color name to add at the specified index:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);

// g. Remove colors at a specific index
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write("<h2>Updated Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>"); */


  
                                                      //     Q.NO-10
                                                        //     ANS:

// Initialize an array with student scores
// var studentScores = [87, 65, 92, 78, 90, 20, 50, 110];
// studentScores.sort(function(a, b) {return a - b;});
// document.write(`Sorted student scores (Ascending): ${studentScores}`)


                                                      //     Q.NO-11
                                                     //     ANS:


// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
//  let selectCities = [];
//  selectCities = cities.slice(3,5) 
//  console.log("cities:"+selectCities)
//  document.write(`<h2>Select Cities Is:<br> ${selectCities}</h2>`)

  
                                                      //     Q.NO-12
                                                     //     ANS:

// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// let arr = ["This", "is", "my", "cat"]
// console.log(arr)
// joinMethod = arr.join(" ")
// console.log(joinMethod)


 
                                                      //    Q.NO-13
                                                     //     ANS: 

// let names = ["Waqas", "Fayyaz", "Jawad", "Ilyas", "Sheraz"];
// let name =names.shift();
// // let name =names.shift();
// console.log(names)
// document.write("out:<br>"+name)
// let name1=names.shift();
// document.write("out:<br>"name1)



                                                     //    Q.NO-14
                                                     //     ANS: 



//     let divices = [];
     
// divices.push = ["Keybord"];
// divices.push = ["Mouse"];
// divices.push = ["Printer"];
// divices.push = ["Moniter"];
// // console.log(divices);
// let value1 = divices.pop();
// let value2 = divices.pop();
// console.log(divices);


                                                    //    Q.NO-15
                                                     //     ANS: 

                                                     // Array of phone manufacturers
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// let dropDown = '<select>';
// for(let i = 0 ; 1 < phoneManufacturers; i++) {
//         dropDown +='<option>' + phoneManufacturers[i] + '</option>';
// }
// dropDown += '</select>'; 
// document.write(dropDown)
// console.log(dropDown)