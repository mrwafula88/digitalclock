
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


                        // DATE OBJECTS => objects that contain values  thaat represent dates and Time
                        //                 these date object can be changed and formatted

                        // date(year, month, day, hour, minute, second, ms)
// const date = new Date(`2024-08-12T12:00:02Z`) 
// const date = new Date();

// const year = date.getFullYear()
// const day = date.getMonth()



// console.log(year);
// console.log(day);

// const date = new Date(`2024-12-01`);
// const date1 = new Date(`2024-01-01`);

// if(date > date1){
//     console.log(`HAPPY KNEW YEAR!!!!!`);
    
// }

// function gg(){
//     const date = new Date()
//     const years = date.getFullYear().toFixed().padStart(2, 0);
// const hours = date.getHours().toFixed().padStart(2, 0);
// const minute = date.getMinutes().toFixed().padStart(2, 0);
// const second = date.getSeconds().toFixed().padStart(2, 0)
// const data = date.getDate().toFixed().padStart(2, 0);
// const month = date.getMonth().toFixed().padStart(2, 0);
// const string = `${years}/${data}/${month} => ${hours}:${minute}:${second}`
// console.log(string);
// }
// gg();
// setInterval(gg, 1000)





                            // CLOSURE => A function defined inside of another function,
                            //            the inner function has access to the variables
                            //            and scope of the outer function.
                            //            Allow for private variables and state maintenance
                            //            used frequently in js framework: react, vue, and Angular

// function outer(){

//     let mike = `hello`
//     function inner(){
//         console.log(mike);
        
//     }

//     inner();
// }

// outer();



// function createcounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increament to ${count} `); 
//     }

//     function getcount(){
//         return count;
//     }

// return {increment, getcount};
// }

// const counter = createcounter();
// const count1 = createcounter();

// counter.increment();
// counter.increment();
// counter.increment();

// count1.increment();
// count1.increment();

// console.log(`our count is ${counter.getcount()}, our count1 is ${count1.getcount()}`);




// function craetegemes(){
//     let scoer = 0;

//     function increscore(points){
//         scoer += points;
//         console.log(`+${points} pts`);
        
//     }
//     function dencreasescore(points){
//         scoer -= points;
//         console.log(`-${points} pts`);
//     }
//     function getscore(){
//         return scoer;
//     }

//     return {increscore, dencreasescore, getscore}

// }

// const newscore = craetegemes();

// newscore.increscore(4);
// newscore.dencreasescore(2)
// newscore.increscore(4)

// console.log(`Total points is ${newscore.getscore()}`);

// setTimeout(function(){
//     window.alert(`Hello`)
// }, 3000)

// function craettimes(){
//     let timeout;

//     function clicktime(){
//         timeout = setTimeout(function(){window.alert(`Hello`)}, 3000);
//         console.log(`STARTED`);
        
//     }
    
//     function cleartime(){
//         cleartime(timeout);
//         console.log(`CLEARED`);
        
//     }
//     return {clicktime, cleartime}
// }

// const newtime = craettimes();

// document.getElementById(`click`).addEventListener(`click`,newtime.clicktime)
// document.getElementById(`click`).addEventListener(`click`,newtime.cleartime)



                                // DIGITAL WATCH PRAGRAMM

function digital(){

    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? `PM` : `AM`;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const year = now.getFullYear().toString().padStart(2, 0);
    const data = now.getDate().toString().padStart(2, 0);
    const month = (now.getMonth() + 1).toString().padStart(2, 0);
    const string = `${year}/${month}/${data}`;
    const timestring = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById(`clock`).textContent = timestring;
    document.getElementById(`month`).textContent = string;
    console.log(timestring);
    
}

digital();
setInterval(digital, 1000)