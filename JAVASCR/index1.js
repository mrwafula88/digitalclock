// console.log("hello world");
// console.log('i like pizza');

// window.alert('hello world');
// window.alert('i love you');

// this is a comment

// VARIABLES(number)

// document.getElementById('h1').textContent = ('hello');
// document.getElementById('para').textContent = ('i have no idea')
// let x = 1234543;
// let price = 10.009;
// let gpa = 1.3;

// console.log(`i have $${price}`)
// console.log(`my gpa is ${gpa}`)
// console.log(`do you have $${x} these amount for supper`);
//  console.log(typeof x)

// VARIABLES(string)

// let firstName = "mike";
// let email = `wafulamicky23@gmail.com`

// console.log(firstName)
// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// console.log(`my email is ${email}`);
// console.log(typeof email);

// BOOLEAN

// let online = true;
// let forsale = false;
// let isStudient = true;
// 
// console.log(typeof online);
// console.log(`is mike on online: ${online}`);
// console.log(`is these car for sale: ${forsale} `);
// console.log(`is the studient enrolled : ${isStudient}`); 

// let firstName = `mike`;
// let age = 18;
// let isstudient = true;

// document.getElementById(`p1`).textContent = `My name is ${firstName}`;
// document.getElementById(`p2`).textContent = `Am  ${age} years old`;
// document.getElementById(`p3`).textContent = `enrolled: ${isstudient}`;

// ARITEMETIC

//  let students = 30;
//  let results = 2 - 3 + 7 / 3 ** 3;

//  students -= 2;

//  console.log(students);
//  console.log(results)

//  document.getElementById(`p1`).textContent = (`results: ${results}`)

// ACCEPT USERNAME

// let useranme = window.prompt(`what is you usename? `)


// console.log(useranme)


// let username;

// document.getElementById("btnn"). onclick = function(){
    // username = document.getElementById("text").value;
    // document.getElementById("h1").textContent = `Hello ${username}`
    // console.log(username)
// }

// CHANGING FROM NUMBER TO BOOLEAN TO STRING AND CAME BACK

// let age = window.prompt("how old a you? ");
// age = Number(age);

// age +=1;

// console.log(age,typeof age);

// let x = "pizza";
// let z = "pizza";
// let y = "pizza";

// x = Number(x);
// z = String(z);
// y = Boolean(y);

// console.log(x);
// console.log(y);
// console.log(y);

                      // METHOD 1 ONE

// CONST

// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("btn").onclick = function(){
    // radius = document.getElementById("input").value;
    // radius = Number(radius);
    // circumference = 2 * PI * radius;

    // document.getElementById("h3").textContent = `circumference is ${circumference}`;

    // console.log(circumference)
// }

// MAKING COUNT



                    // METHOD TWO



// const btnsde = document.getElementById("btnsde");
// const btnsin = document.getElementById("btnsin");
// const btnsre =  document.getElementById("btnsre");
// const countla = document.getElementById("countla");
// let count = 0;

// btnsde.onclick = function(){
    // count--;
    // countla.textContent = count;

    // console.log(count)
// }
// btnsin.onclick = function(){
    // count++;
    // countla.textContent = count;

    // console.log(count)
// }
// btnsre.onclick = function(){
    // count = 0;
    // countla.textContent = count;

    // console.log(count)
// }
// console.log(Math.PI);
// console.log(Math.E)

// let x = 81;
// let y = 5;
// let z = 34;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.sqrt(x);
// z = Math.pow(x, y);
// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z)

// console.log(min)
// const max = 50;
// const min = 100;

// let randomNumm = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNumm);


// const btn = document.getElementById("btn");
// const label = document.getElementById("label");
// const label1 = document.getElementById("label1");
// const max = 100;
// const min = 10;
// let randomNum;
// let randomNum1;

// btn.onclick = function(){
    // 
    // label.textContent = randomNum;
    // label1.textContent = randomNum1;
// }


// let age = 1;

// if(age >= 18){
    // console.log(`you are not allowed inside here!!!!!`);
// }
// else{
    // console.log(`you are allowed iside here!!!!`);
// }
// const btn = document.getElementById("btn");
// const display = document.getElementById("display");
// const input = document.getElementById("input");
// let age;
// let licince = true;

// btn.onclick = function(){
    // age = input.value;
    // age = Number(age);

    // if(age >= 50){
        // display.textContent = `you are too old`;
        // console.log(`you are too old`)
    // }
    // else if(age >= 18){
        // display.textContent = `you are enough to have your owner id`;
        // console.log(`you are enough to have your owner id`);

    // // }
    // else if(age == 0 ){
//         display.textContent = `you are new born, you can't have all these documents`;
//         console.log(`you are new born, you can't enter inside of these site`)
//     }
//     else{
//         display.textContent = `you are not enough to have your on id`;
//         console.log(`you are not enough to have an id`);
//     }
// }

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercardbtn = document.getElementById("mastercardbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const btn = document.getElementById("btn");

// const display = document.getElementById("display");
// const display1 = document.getElementById("display1");

// btn.onclick = function(){
//     if(mycheckbox.checked){
//         display.textContent = `you have subscribed`;
//     }
//     else{
//         display.textContent = `you have NOT subscribed`;
//     }
//     if(paypalbtn.checked){
//         display1.textContent = `you are paying with paypal`;
//     }
//     else if(visabtn.checked){
//         display1.textContent = `you are paying with visa`;
//     }
//     else if(mastercardbtn.checked){
//         display1.textContent = `you are paying with mastercard`;
//     }
//     else{
//         display1.textContent = ` you must select a payment methode`
//     }
// }
// let age = 2;
// age >= 18 ? console.log(`you are an adult`) : console.log(`you are minor`);

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const display1 = document.getElementById("display1");
// let age;

// btn.onclick = function(){
//     age = input.value;
//     age = Number(age);
//     age >= 18 ? display1.textContent = `you are an adult` :display1.textContent = `you are minor` 
//      console.log(`you are minor`);
// }
            

                //  REPLACED BY:

                // IF AND ELSE => ? AND :


// let students = false;
// let messege = students ? `you are a studient` : `you are NOT a students`;

// console.log(messege);

// let pucherse = 120;
// let discount = pucherse >= 100 ? 10 : 0;

// console.log(`your total is $${pucherse - pucherse * (discount/100)}`);

              // ELSE IF => SWITCH

// let day = 3;

// switch(day){
//     case 1:
//         console.log(`it is sunday`);
//         break;
//     case 2:
//         console.log(`it is monday`);
//         break;
//     case 2:
//         console.log(`it is tuesday`);
//         break;
//     case 3:
//         console.log(`it is wednsday`);
//         break;
//     default:
//         console.log(`${day} is NOT a day`)
// }

                // STRING
// let user = "Xavi";
// let phonenumber = "70-830-8723"
// let results =  user.startsWith("");
// let results = user.endsWith(" ")
// let results = user.includes("x")
// let results = phonenumber.replaceAll("-", "..")
// let results = phonenumber.padStart("15", "+254")
// let results = phonenumber.padEnd("15", "000")


// user = user.trim();
// user = user.toUpperCase();
// user = user.toLowerCase();
// user = user.repeat(3);
// let results =  user.startsWith("u");



// console.log(user.length)
// console.log(user.charAt(0));
// console.log(user.indexOf("x"))
// console.log(user.lastIndexOf("v"))
// console.log(results);

//             //   SLICING STRING
// const fullName = "mickyxavvy xavi";

// // let firstName = fullname.slice("0", "3")
// let lastName = fullname.slice(-3)

// console.log(lastName)

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// let email = "wafula@gmail.com";

// let firstName = email.slice(0, email.indexOf("@"));
// let lastName = email.slice(email.indexOf("@") + 1);

// console.log(firstName)
// console.log(lastName)

                    //   METHOD CHAININDG

                    // NO METHOD CHAINING

// let username = window.prompt("enter your username: ");

// username =  username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extracase = username.slice(1);
// extracase = extracase.toLowerCase();
// username = letter + extracase;

// console.log(username);
 

            //  METHOD CHAINING
// let username = window.prompt("enter your username: ");

// username = username.trim().charAt(0).toUpperCase() + 
// username.trim().slice(1).toLowerCase();

// console.log(username)


        //   LOgicaL OPERATES(AND=&&, OR=||(atleast one condition is true), NOT=!)

// const temp = -0;

// if(temp > 0 && temp >= 30){
//     console.log("the weather is good");
// }
// else{
//     console.log("the wheather is bad!!");
// }

// const isunny = false
// if(!isunny){
//     console.log("is cloudy");
// }
// else{
//     console.log('is sunny')
// }


        //    = assigment of opartaes
        // == comparison operates
        // === strctily equality oparates
        // != not equaly
        // !== strictly not equaly


// const pi = 3.14;

// if(pi === 3.14){
//     console.log("this is pi");
// }
// else{
//     console.log("this is not pi");
// }

                //  WHILE LOOOP
            
// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("enter your username: ");
// }

// console.log(`hello ${username}`)


// let loggedin = false;
// let useranme;
// let password;

// while(!loggedin){
//     useranme = window.prompt("enter your username: ");
//     password = window.prompt("enter your password: ");

//     if(useranme === "myname" && password === "12345"){
//         loggedin = true;
//         console.log("you are logged in");
//     }
//     else{
//         console.log("invalid credentials! please try again");
//     }

// }


                                //  LOOOOPS


        //   FOR LOOPS

// for(let i = 5; i > 0; i--){
//     console.log(`mike ${i}`)
// }

// const names = [`quan, mike, xavi, seanio, vee`,`xavvy, loan, elon`];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i], `wafula`);
// }
              //          WHILE LOOP
// let i = 10;
// while(i >= 0){
//     console.log(i);
//     i--;
// }

                // FOR LOOP

// for(name of names){
//     console.log(names, `wafula`);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
            //   DO WHILE LOOP
// let i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i < 10)


            //   FOR EACH => used in Array

// const animals = [`cat`, `cow`, `Bird`, `duck`]

// animals.forEach(animal => {
//     console.log(animal);

// });


        //    for in loop   

// const user = {firstname: `mike`, lastname: `quani`};
// for(key in user){
//     console.log(user[key]);
// }

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }
// console.log("HAPPY NEW YEAR!!!!!");


// for(let i = 0; i <= 20; i++){
//     if(i == 13){
//         // continue;
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }


// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer)
// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`guess a number between ${minNum} to ${maxNum}`);
//     guess = Number(guess)

//     if(isNaN(guess)){
//         window.prompt(`please enter a valid number`)
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.prompt(`please enter a valid number`)
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert(`Too LOW! try again`)
//         }
//         else if(guess > answer){
//             window.alert(`Too HIGH! try again`)
//         }
//         else{
//             window.alert(`CORRECT! the answer was ${answer}. it took you ${attempts} attempts`)
//             running = false;
//         }
//     }

// }


                            //   FUNCTION
//  function greet(firstName, lastName){
//     console.log(`hello  ${firstName} ${lastName}`);
//  }
//  greet(`mike`, `wafula`)

// function sum(x, y){
//     return x + y;
// }

// console.log(`the results will $${sum(4,8)}`);
                    

// function happybirthday(username, age){
//     console.log("Happy birth to you");
//     console.log(`Happy birth to you ${username}`);
//     console.log("Happy birth to you");
//     console.log(`you are ${age} years old`);
// }

// happybirthday("micky", 19);



// function add(x,y){
//     return x + y;
// }
// console.log(add(2, 3));

// function iseven(number){
//     return number % 2 === 0 ? true : false;
// }
// console.log(iseven(23))

// function isemailvalid(email){
//     return email.includes(`@`) ? true : false || email.includes(`.com`) ? true : false;
// }
// console.log(isemailvalid("wafulamicky@2004.com"))

// function2();

// function function1(){
//     let x = 2;
//     console.log(x)
// }
// function function2(){
//     let y = 8;
//     console.log(y)
// }

                //    TEMPERATURE CONVESTION PROGRAM

// const textbox = document.getElementById(`textbox`);
// const tofahremheit= document.getElementById(`tofahremheit`);
// const tocelsius = document.getElementById(`tocelsius`);
// const result = document.getElementById(`result`);
// let temp;

// function convert(){

//     if(tofahremheit.checked){
//         temp = Number(textbox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "F";
//     }
//     else if(tocelsius.checked){
//         temp = Number(textbox.value);
//         temp =  (5/9) * (temp - 32);
//         result.textContent = temp.toFixed(1) + "C";
//     }
//     else{
//         result.textContent = `select a unit!!`
//     }
// }



            //   ARRRAYS

// let fruits = [`banana`, `apple`, `mangoes`];

// // fruits.push(`coconut`);
// // fruits.pop();
// // fruits.unshift(`mango`);
// // fruits.shift();


// // console.log(fruits[0])
// // console.log(fruits[1])
// // console.log(fruits[2])

// // let numofruits = fruits.length;
// // let indexOf = fruits.indexOf(`apple`);
// // // for(let i = 0; i < fruits.length; i++){
// //     console.log(fruits[i]);
// // }
// // 
// // for(let fruit of fruits){
// //     console.log(fruit)
// // }


//             //   SPREAD OPARATES (...)

// // let name = [`mike`, `john`, `xavi`]
// // let girls = [`faith`, `Dory`, `shaavi`]

// // let names = [...name, ...girls];

// // console.log(names)
      
//             //  ...RESET OPARATES

//             // function1 to ge list
// // function openfridge(...foods){
// //     console.log(...foods)
// // }


//             //    function2 to combine listof arrays
// // function getfood(...foods){
// //     return foods;
// // }
// // const food1 = `pizza`;
// // const food2 = `humburger`;
// // const food3 = `sushi`;
// // const food4 = `ramen`;
// //                    1
// // // openfridge(food1, food2, food3, food4)

// //                    2
// // let foods = getfood(food1, food2, food3, food4);

// // console.log(foods);

// let number = [`mike`, `xavi`, `john`, `quan`, `sonk`];
// let numb = [`mike1`, `xavi2`, `john3`, `quan4`, `sonk90`];
// // let maxNum = Math.max(...number);

// // console.log(maxNum);
// // for(let i = 0; i < number.length; i++){
// //     console.log(number[i]);
// // }
 
// let num = [...number, ...numb,`soshi`].join(` `)

// console.log(num)
 
    //   reset
// function sum(...numbers){
//     let result = 0;
//     for (const number of numbers) {
//         result = result + number;
//     }
//     return result;
// }

// console.log(sum(2, 3, 4));

    //   spread

    // function sum(a, b){
    //     return a + b;
    // }
    // let sm = [3, 4];
    // console.log(sum(...sm));

    // resest

// function combinestrings(...strings){
//     return strings.join(` `)
// }


// let fullname = combinestrings(`M.r`, `Wafula`, `Michael`, `999`)

// console.log(fullname);


                 // // DICE ROLLER


// function diceroller(){
//     const input = document.getElementById(`input`).value;
//     const diceresult = document.getElementById(`diceresult`) //     const diceimg = document.getElementById(`diceimg`)
//     const values = [];
//     const images = [];
                    
//     for(let i = 0; i < input; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice/${value}.png">`)
//     }
//     diceresult.textContent = `Dice: ${values.join(`, `)}`;
//     diceimg.innerHTML = images.join(` `);
// }

                        //  RANDOM PASSWORD

// function generate(length, includeupppercase,includelowecarse,includenumber,includesymbols){
//     const lowercase = "abcdefghijklmnoqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbol = "!@#$%^&*()|";

//     let allowchars = '';
//     let password = '';

//     allowchars += includelowecarse ? lowercase : " ";
//     allowchars += includeupppercase ? uppercase : " ";
//     allowchars += includenumber ? numbers : " ";
//     allowchars += includesymbols ? symbol : " ";

//     if(length <= 0){
//         return `(password length must be at least 1)`
//     }
//     if(allowchars.length === 0){
//         return `(at least 1 charecter must be there)`
//     }

//     for(let i = 0; i < length; i++){
//         const random = Math.floor(Math.random() * allowchars.length) + 1;
//         password += allowchars[random];
//     }

//     return password;
// }

// const passswordlength = 12;
// const includeupppercase = true;
// const includelowecarse = true;
// const includenumber = true;
// const includesymbols = true;

// const password = generate(passswordlength, 
//                           includeupppercase, 
//                           includelowecarse, 
//                           includenumber,
//                           includesymbols);
// console.log(`Genareted password: ${password} `);

                            //  CALLBACK FUCTION => YOU PASS FUCTION AS AN ARGUMENT IN ANOTHER FUCTION

// hello (wait);

// function hello(callback){
//     console.log("hello!!");
//     callback();
    
// }
// function goodbyee(){
//     console.log("goodbyee");
    
// }
// function wait(){
//     console.log("wait!!!");
// }



// sum(dispalya, 3, 4)

// function sum(callback, x, y){
//     let resulte = x + y;
//     callback(resulte);
// }
// function dispalya(resulte){
//     document.getElementById("h1").textContent = `The resulte: ${resulte}`;
//     console.log(resulte);
    
// }



// let number = [1, 2, 3, 4, 5, 6, 6];

// number.forEach(duoble);
// number.forEach(display);

// function duoble(element, arrays, index){
//     console.log(element);
    
//     arrays[index] = element * 3;
// }

// function duoble(element, arrays, index){
//     arrays[index] = element * 3;
// }

// function display(element){
//     console.log(element);
// }


// let fruits = ["banana", "apple", "berry", "coconut"];

// fruits.forEach(captalized);
// fruits.forEach(display);

// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
//     // console.log(array[index]);
    
// }

// function captalized(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     document.getElementById("h1").textContent = fruits.join('.   ')
//     console.log(element);
    
// }


                        //  .MAP()
                  
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// console.log(squares);



// function square(element){
//     return Math.pow(element, 2);
// }


// const student = ["Quan", "mike", "wafula"];
// const students = student.map(uppercase);

// console.log(students);


// function uppercase(element){
//     // return element.toUpperCase();
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }


// const dates = ["2024-10-7", "2024-24-4", "2024-4-8"];
// const fomatdates = dates.map(fommattdate);

// console.log(fomatdates);     // => .join(" ")



// function fommattdate(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }


 
                                //  .FILTER() => it craetes a new arry by filltering the out elements

// let number = [1, 2, 3, 4, 5, 6];
// const numbers = number.filter(iseven)


// console.log(numbers);

 

// function iseven(element){
//     return element % 2 === 0;
// }


// const age = [14, 34, 56, 16, 18, 19];
// const adult = age.filter(ischild);
// // const adult = age.filter(isadult);

// console.log(adult);



// function isadult(element){
//     return element >= 18;
// }

// function ischild(element){
//     return element <= 18;
// }


                                //    REDUCE() => IT REDUCES THE ELEMENT  OF AN ARRY TO A SINGLE VALUE 

// const price = [10, 45, 78, 98, 24];
// const total = price.reduce(sum);

// console.log(`$${total.toFixed(2)}`);



// function sum(accumelator, element){
//     return accumelator + element;
// }


// const grades = [34, 756, 877, 870, 87, 879,160];
// const minNum = grades.reduce(getmin);

// console.log(minNum);



// function getmin(acculator, element){
//     return Math.min(acculator, element);
// }



                                    //    FUCTION EXPRESSIONS --> away of defining fuctions as values or variable
// const hello = function(){
//     console.log(`hello world!!`);
// } 
// setTimeout(hello, 4000)

// setTimeout(function(){
//     console.log(`helllo`)
// }, 4000)

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// console.log(squares);


// const name = ["mike", "seanio", "xavi", "vee", "quan", "camkat", "raha"]
// const uppercase = name.map(function(element){
//     return element.charAt(0).toUpperCase() + element.slice(1);
// })

// console.log(uppercase);

// const numbers = [23, 45, 67, 23, 34];
// const sum = numbers.reduce(function(acculator, element){
//     return acculator + element;
// })

// console.log(sum);

// const number = [23, 56, 76, 35, 12, 23, 23];
// const min = number.reduce(function(acculator, element){
//     return Math.max(acculator, element);
// })

// console.log(min);


// const age = [16, 72, 16, 18, 98, 10];
// const ages = age.filter(function(element){
//     return element <= 18;
// })

// console.log(ages);

// const number = [23, 34, 65, 78, 90, 12, 34];
// const iseven = number.filter(function(element){
//     return element % 2 === 0;
// })

// console.log(iseven);



                            //  ARROW-->
                            // a concise wato write fuction expressions good for simple 
                            // //  fuctions that use only ocence

// const hello = (name, age) => {console.log(`hello ${name}`)
//                               console.log(`you are ${age} years old`)
// };

// hello(`mike`,23);

// setTimeout( () => console.log("hello"),3000);



// const numbers = [23, 34, 65, 34, 36];
// const squares = numbers.map( (element) => Math.pow(element, 2))

// console.log(squares);

// const numbers = [23, 45, 57, 67, 45, 18];
// const ages = numbers.filter( (element) => {
//     return element >= 30;
// })

// console.log(numbers);


// const number = [23, 45, 567, 87];
// const total = number.reduce(sum);

// console.log(total);



// function sum(element, element2){
//     return Math.max(element, element2);
// }


// const numbers = [23, 56, 78, 56, 45];
// const ages = numbers.reduce( (element, el1) => Math.max(element, el1));
// const ieven = numbers.filter( (element) => element % 2 === 0);
// const cube = numbers.map( (element) => Math.pow(element, 3))


// console.log(cube);


                    //  OBJECTS => A  collection of realated properties and /or methods can represents real world objects (people, products, places, e.t.c)
                    //             object = {key: value, 
                    //                 fuctions()
                    //             }

// const person = {
//     firstname: "quani",
//     lastname: "mike",
//     age: 30,
//     isemployed: true,
//     sayhello: function(){
//         document.getElementById(`hi`).textContent = `hello am quani ${this.isemployed}`;
//         console.log(person.lastname);
//     }
// };
// person.sayhello();

// const person1 = {
//     firstname: "vee",
//     lastname: "seanio",
//     age: 23,
//     isemployed: false,
//     sayhello: () => {
//         console.log(`hello people`);
        
//     }
// };
// person1.sayhello()



                            //  this

// const person1 = {
//     favfood: "pilau",
//     pet: "cut",
//     footballer: true,
//     saysomething:function(){
//         console.log(`am proud to code. am ${this.pet}`)
//     },
//     // this doesn't apply in arrow fuction 
// };
// person1.saysomething()


                        //    CONSTRUCTORS => aspecial method for defining 
                                            //   the propeties and mthods of objects


// function car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.driver = function(){console.log(
//     `i have ${this.make}, ${this.model}, ${this.year}, ${color}`)}
// }

// const car1 = new car("Audi", "Rs4", 2018, "black");
// const car2 = new car("volks wagen", "toureg", 2025, "black")

// car1.driver();
// car2.driver();



// function shoes(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
// }

// const group1 = new shoes("nike", "jordan", "2022", "redblack")

// console.log(group1.make);
// console.log(group1.model);
// console.log(group1.year);
// console.log(group1.color);



// function car(make, model, year, color,  drive, price){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = drive,
//     this.price = price
//     this.driver = function(){console.log(`we have a ${this.make}, ${this.model}, ${this.year}, ${this.color}, ${this.drive}, ${this.price}`)
//     }
// }

// const car1 = new car(`mercedez benz`, `C200`, 2024, `black`, `left hand drive`, `price $1,056`)
// const car2 = new car(`mercedez benz`, `E200`, 2024, `black`, `left hand drive`, `price $2,056`)


// car1.driver();
// car2.driver();


                            // CLASS => (ES6 features) providers a more structured and cleaner way to work with 
                            //           objects compared to traditional constructor fuctions
                            //           ex static keyword, encapsulation, inheritance. 

// class cloth{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayproduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
//     }

//     calculatetotal(salastax){
//         return this.price + (this.price * salastax);
//     }
// }

// const salastax = 0.05;

// const product1 = new cloth(`t-shirt`, 23.00);
// const product2 = new cloth(`boxer`, 43.00);
// const product3 = new cloth(`sweatpants`, 79.20);

// product1.displayproduct();
// const total = product1.calculatetotal(salastax);
// console.log(`total price(with tax): $${total.toFixed(2)}`);

// product2.displayproduct();
// const total2 = product2.calculatetotal(salastax);
// console.log(`total price(with tax): $${total2.toFixed(2)}`);

// product3.displayproduct();
// const total3 = product3.calculatetotal(salastax);
// console.log(`total price(with tax): $${total3.toFixed(2)}`);


// class perfumes{
//     constructor(name, scent, price){
//         this.name = name;
//         this.scent = scent;
//         this.price = price;
//     }
//     displayperfurmes(){
//         console.log(`perfume name: ${this.name}`);
//         console.log(`smell scent: ${this.scent}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
        
//     }
//     calculatetotal(salestax){
//         return this.price + (this.price * salestax);
//     }
// }

// const salastax = 0.10;

// const perfume1 = new perfumes(`floral`, `flower scent`, 1200)
// const perfume2 = new perfumes(`Aquatic`, `fresh scent`, 3400)

// perfume1.displayperfurmes()
// const total = perfume1.calculatetotal(salastax)
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// perfume2.displayperfurmes()
// const total2 = perfume2.calculatetotal(salastax)
// console.log(`Total price (with tax): $${total2.toFixed(2)}`);


                    //  STATIC =>KEYWORD THAT DEFINES PROPERTIES OR MTHODS THAT
                    //         BELONG TO A CLASS ITESELF RATHER THAB THE OBJECTS 
                    //         CREATED FROM THAT CLASS (CLASS OWNS ANYTHING STATIC, 
                    //         NOT THE OBJECTS)
 
// class math{
//     static PI = 3.14290;

// static getdiameters(radius){
//     return radius * 2;
// }
// static getcurmferences(radius){
//     return 2 * this.PI * (radius * 2);
// }

// }

// console.log(math.getdiameters(20));
// console.log(math.getcurmferences(34));






// class user{ 

//     static usercount = 0;

//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         user.usercount++;
//     }
//     static getuseraccount(){
//         console.log(`there are ${user.usercount} useracount in online`);
        
//     }
//     displayusers(){
//         console.log(`hello my usename is ${this.username}, and my gmail is ${this.email}.`);
        
//     }
// }

// const user1 = new user(`mike`, `wafulamicky@gmail.com`);
// const user2 = new user(`quani`, `quanikamta@gmail.com`);

// user1.displayusers();
// user2.displayusers();
// user.getuseraccount();

                                //  INHERITANCE => allows a new class to inherit properties and 
                                //                  mthods from an existing class (parent -> child)
                                //                  helps with code reusabillity.

// class Animal{

//     alive = true;

//     eat(){
//         console.log(`tha animal ${this.name} is eating`);
//     }
//     sleeping(){
//         console.log(`the animal ${this.name} is sleeping`);
//     }
// }

// class Fish extends Animal{

//     name = `fish`;

//     swim(){
//         console.log(`the ${this.name} is swimming away.`); 
//     }   
// }

// class Rabbit extends Animal{
//     name = `rabbit`;

//     run(){
//         console.log(`the ${this.name} is running.`); 
//     }
// } 

// const fish1 = new Fish();
// const rabbit = new Rabbit();

// console.log(fish1.alive);
// fish1.eat();
// fish1.sleeping();
// fish1.swim();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleeping();
// rabbit.run();

                          
                            // KEYWORDS, EXTENDS AND CLASSES
                     
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`these ${this.name} moves at a speed of ${speed}mph`);
        
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runspeed){
//         super(name, age)
//         this.runspeed = runspeed;
//     }
//     moved(){
//         console.log(`these ${this.name} can run`);
//         super.move(this.runspeed)
        
//     }
// }

// class Hawk extends Animal{

//     constructor(name, age, flyspeed){
//         super(name, age)
//         this.flyspeed = flyspeed;
//     }
//     flyed(){
//         console.log(`these ${this.name} can fly`);
//         super.move(this.flyspeed)
        
//     }
// }

// const rabbit = new Rabbit(`rabbit`, 1, 25);
// const hawk = new Hawk(`hawk`, 3, 45);

// rabbit.moved()
// hawk.flyed()

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed.toFixed(2), `km/hrs`);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flyspeed.toFixed(2), `km/hrs`);

                 
               
                //    GETTERS = SPECIAL METHOD THAT  MAKES A PROPERTY Readable
                //    SETTER = SPECIAL MEHTOD THAT MAKES A PROPERTY WRITABL

// class Rectangle{

//     constructor(heigth, width){
//         this.width = width;
//         this.heigth = heigth;
//     }
    
//     set width(newidth){

//         if(newidth > 0){
//             this._width = newidth;
//         }
//         else{
//             console.error(`width number must be a postive number`);  
//         }
//     }

//     set heigth(newheigth){

//         if(newheigth > 0){
//             this._heigth = newheigth;
//         }
//         else{
//             console.error(`heigth number must be a postive number`);  
//         }
//     }

//     get width(){
//         return `${(this._width).toFixed(1)}cm`;
//     }

//     get heigth(){
//         return `${(this._heigth).toFixed(1)}cm`;
//     }

//     get area(){
//         return `${(this._width * this._heigth).toFixed(2)}cm`;
//     }
// }
// const rectangle = new Rectangle(29, 4)

// console.log(rectangle.heigth);
// console.log(rectangle.width);
// console.log(rectangle.area);



// class Person1{

//     constructor(Firstname, Lastname, age){
//         this.Firstname = Firstname;
//         this.Lastname = Lastname;
//         this.age = age;
//     }
    
//     set Firstname(newFirstname){
//         if(typeof newFirstname === `string` && newFirstname.length > 0){
//             this._Firstname = newFirstname;
//         }
//         else{
//             console.log(`it must be an empty string`);
//         }
//     }

//     set Lastname(newLastname){
//         if(typeof newLastname === `string` && newLastname.length > 0){
//           this._Lastname = newLastname;  
//         }
//         else{
//             console.error(`the name must be non-empty string`);
            
//         }
//     }

//     set age(newage){
//         if(typeof newage === `number` && newage >= 0){
//             this._age = newage;
//         }
//         else{
//             console.error(`it is not a number`);
//         }
//     }

//     get Firstname(){
//         return this._Lastname;
//     }

//     get Lastname(){
//         return this._Firstname;
//     }

//     get age(){
//         return this._age;
//     }
// }

// const person1 = new Person1(`wafula`, `mike`, 12)

// console.log(person1.Firstname);
// console.log(person1.Lastname);
// console.log(person1.age);


// DESTRUCTURING => extract values from arrays and objects, then assign
//                  them to variables in a convenient awy 
//                  [] = to perform array DESTRUCTURING
//                  {} = to perform object DESTRUCTURING
//                  5 

            //  ex.1 =>SWAP THE VALUE OF TWO VARIABLES
// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a);
// console.log(b);
           

                // ex.2 =>ELEMENTS IN AN ARRAY 
// const colors = [`red`, `blue`, `white`, `black`];

// [colors[0], colors[3]] = [colors[3], colors[0]]

// console.log(colors);

                // export.3 => ASSSIGN ARREY ELEMENTS TO VARIABLES

// const colors = [`red`, `blue`, `white`, `black`];

// const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

// console.log(firstcolor);
// console.log(secondcolor);
// console.log(extracolors);


                //  export.4

// const person = {
//     firstname: `Quani`,
//     lastname: `mike`,
//     age:`20`,
// }
// const person1 = {
//     firstname: `seanio`,
//     lastname: `raha`,
//     age:`19`,
// }

// const {firstname, lastname, age} = person;

// console.log(firstname);

// class People{
    
//     constructor(firstname, lastname, age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

// distructuring in fuctions and objects

//     display({firstname, lastname, age, job}){
//         console.log(`name:${firstname} ${lastname}`);
//         console.log(`age: ${age}`);
//         console.log(`job: ${job}`);
//     }


//     set firstname(newFirstname){
//         if(typeof newFirstname === `string`){
//             this._firstname = newFirstname;
//         }
//         else{
//             console.error(`the name must be a string`);
            
//         }
//     }

//     get firstname(){
//         return this._firstname;
//     }
// }

// const person = new People(`quani`, `mike`, 20);
// const {firstname, age, lastname, job=`software engineering`} = person;

// // console.log(firstname);
// // console.log(lastname)
// // console.log(age);
// // console.log(job);

// person.display({firstname: person.firstname, lastname: person.lastname, age: person.age, job: `software engineer`})









                        // NESTED OBJECTS => objecrs inside of other objects.
                        //                   Allows you to represent more complex data structures.
                        //                   Child objects is enclosed by a parent objects

                        //                   person{Address{}, contactinfo{}}
                        //                   shopppingcart{keyboard{}, mouse{}, monitor{}}



// class People{

//     constructor(fullname, age, istudent, hobbies,address){
//         this.fullname = fullname;
//         this.age = age;
//         this.istudent = istudent;
//         this.hobbies = hobbies;
//         this.address = address;
//     }
//     displayperson1(){
//         console.log(`Fullname: ${this.fullname}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Istudent: ${this.istudent}`);
//         console.log(`Hobbies: ${this.hobbies}`);
//         console.log(`Address: ${this.address.country}`);
//     }
// }

// const person1 = new People(`quani micky`, 20, true, [`footballer`, `coder`], 
//     {street: `123 mani`, city: `Nairobi`, country: `Kenya` })

// person1.displayperson1()



// class Student{

//     constructor(Fullname, straem, room, address){
//         this.Fullname = Fullname;
//         this.straem = straem;
//         this.room = room;
//         this.address = address;
//     }
//     display1(){
//         console.log(`Fullname: ${this.Fullname}`);
//         console.log(`Straem: ${this.straem}`);
//         console.log(`Room: ${this.room}`);
//         console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.code}`);
//     }
// }

// const student1 = new Student(`Wafula michael`, `4s`, `001`, {street: `James Gichuru`, city: `Nairobi`, code:`0909`})
// const student2 = new Student(`wamatangi wamalwa`, `45h`, `002`, {street: `Thika way`, city: `Nairobi`, code:`1009`})

// student1.display1();
// student2.display1();


                                    //   ARRAYS OF OBJECT

// const fruits = [{name: `apple`, color: `red`, calories: 98},
//                 {name: `Banana`, color: `yellow`, calories: 79}, 
//                 {name: `Mangoes`, color: `green`, calories: 38}, 
//                 {name: `Berry`, color: `red`, calories: 92},]


// fruits.push({name: `orange`, color: `orange`, calories: 87})

// fruits.pop();
// fruits.splice(0 ,2)
// console.log(fruits);

// fruits.forEach(fruits => console.log(fruits.color));

// fruitsname = fruits.map(function(element){
//     return element.name
// })
// const fruitscalories = fruits.map(fruits => fruits.calories)

// const fruitscolor = fruits.filter(function(element){
//     return element.color === `red`;
// })

// const fruitscalories = fruits.filter(function(element) {
//     return element.calories < 70;
// })

// const maxfruit = fruits.reduce(function(max, element){
//     return element.calories > max.calories ? element : max;
// });

// console.log(maxfruit);


// const fruists = [`Banana`, `Apple`, `Quani`, `Mike`]

// const fresh = fruists.sort();

// console.log(fresh);

                        // SORT() => METHOD USED TO SORT ELEMEMENTS OF AN ARRAY IN PLACES
                        //        SORTD ELEMENTS AS STRING IN LEXICOGRAPHIC ORDER, NOT ALPHABETIC 
                        //        LEXICOGRAPHIC => [ALPHABET + NUMBERS + SYMBOLS] AS STRINGS


// const number = [10, 7, 8, 2, 9, 6, 1, 4]

// const numbers = number.sort(function(element, el1){
//     return element - el1;
// });

// console.log(numbers);



// const people = [{name: `Quani mike`, age: 20, gpa: 1.0},
//                  {name: `Seanio cam`, age: 34, gpa: 3.5},
//                  {name: `Vee raha`, age: 23, gpa: 2.9},
//                  {name: `Cam kat`, age: 19, gpa: 1.1},
//                  {name: `Xaxy savy`, age: 30, gpa: 0.4}]

// const peoples = people.sort(function(element, element2){
//     return element.name.localeCompare(element2.name);
// })

// console.log(peoples);


                            //   GAME SHUFFLE NUMBERS AND LETTERS

// const cards = [`A`, 2, 3, 5, 4, `Q`, `D`, `K`];

// shuffle(cards);

// console.log(cards);



// function shuffle(array){

//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// const numbers = [1, 2, 3, 4 ,5 ,6 ,7 ,8];

// num(numbers);


// console.log(numbers);

// function num(element){
//     for(let i = element.length; i > 0; i++){
//         const random = Math.random() * (i + 1);

//         [element[i], element[random]] = [element[random], element[i]]
//     }
// }`  `