// -------------------------------------CHAPTER 21------------------------------------------------------
// -------------------------------------CHANGING CASE---------------------------------------------------
// var ourCities=["karachi", "lahore", "islamabad", "quetta" ,"peshawar"]
// var city = prompt("WHERE ARE YOU FROM?")
// city = city.toLowerCase()
// if(city===ourCities){
//     alert("YOUR CITY IS ON OUR LIST")
// }
// -------------------------------------CHAPTER 22------------------------------------------------------
// -------------------------------------MEASURING LENGTH AND EXTRACTING PARTS-------------------------------------------------
// var city = prompt("ENTER ANY CITY")
// var charsInCity= city.length
// console.log(charsInCity)
// var city = prompt("ENTER ANY CITY")
// var firstChar = city.slice(0,1)
// firstChar=firstChar.toUpperCase()
// var otherChars = city.slice(1)
// otherChars=otherChars.toLowerCase()
// var fullCity = firstChar + otherChars
// console.log(fullCity);
// -------------------------------------CHAPTER 23------------------------------------------------------
// -------------------------------------FINDING SEGMENTS-------------------------------------------------

// var name1 = "MY NAME IS AHMED"
// var firstChar= name1.indexOf("AHMED")
// console.log(firstChar)
// if (firstChar!==-1){
//     name1 = name1.slice(0,firstChar)+ "ZAEEM"+ name1.slice(firstChar+5)

// }
// console.log(name1)
// -------------------------------------CHAPTER 24------------------------------------------------------
// -------------------------------------FINDING A CHARACTER AT A LOCATION-------------------------------------------------
// var name1 = "ZAEEM"
// var firstChar= name1.charAt(0)
// console.log(firstChar)
// -------------------------------------CHAPTER 25------------------------------------------------------
// -------------------------------------REPALCING CHARACTERS-------------------------------------------------
// var name1= "MY NAME IS AHMED"
// var new1 = name1.replace("AHMED","ZAEEM")
// console.log(new1)
// -------------------------------------CHAPTER 26 ------------------------------------------------------
// -------------------------------------ROUNDING NUMBERS-------------------------------------------------
// var totalMarks = 500
// var obtMarks = 348
// var per = obtMarks / totalMarks *100
// console.log(per)
// per= Math.round(per)
// console.log(per)

// var totalMarks = 500
// var obtMarks = 348
// var per = obtMarks / totalMarks *100
// console.log(per)
// per= Math.ceil(per)
// console.log(per)

// var totalMarks = 500
// var obtMarks = 348
// var per = obtMarks / totalMarks *100
// console.log(per)
// per= Math.floor(per)
// console.log(per)




// -------------------------------------CHAPTER 27------------------------------------------------------
// -------------------------------------RANDOM NUMBERS-------------------------------------------------`
// var randomNumber = Math.random()
// console.log(randomNumber);
// var another = (randomNumber +1 )
// another =Math.round(another)
// console.log(another)
// -------------------------------------CHAPTER 28------------------------------------------------------
// ---------------------------Converting strings to integers and decimals-------------------------------
// var string1 = "100"
// console.log(typeof(string1))
// string1 = parseInt()
// console.log(typeof(string1));
// var string2 = "12.999999999"
// string2 = parseInt(string2)
// console.log(string2)
// var string3  = "15.99"
// string3 = parseFloat(string3)
// console.log(string3)
// -------------------------------------CHAPTER 29------------------------------------------------------
// ---------------------------Converting numbers to strings and numbers to strings----------------------
// var numbers = "455"
// numbers = Number(numbers)
// console.log(typeof(numbers))
// var strings = 455
// strings = strings.toString()
// console.log(typeof(strings))

// -------------------------------------CHAPTER 30------------------------------------------------------
// -----------------------------------Controlling the length of decimals--------------------------------
// var pieValue = 3.141592653589793238
// pieValue = pieValue.toFixed(2)
// console.log(pieValue)

// -------------------------------------CHAPTER 31------------------------------------------------------
// -------------------------------Getting the current date and time-------------------------------------

// var new1 = new Date()
// console.log(new1) 
// -------------------------------------CHAPTER 32------------------------------------------------------
// -------------------------------Extracting parts of the date and time---------------------------------
// var now = new Date()
// var crrDay =now.getDay()
// console.log(now)
// var crrMonth =now.getMonth()
// console.log(now)
// var crrYr =now.getFullYear()
// console.log(now)
// var crrHr =now.getHours()
// console.log(now)
// var crrM =now.getMinutes()
// console.log(now)
// var crrS =now.getSeconds()
// console.log(now)
// var crrMi =now.getMilliseconds()
// console.log(now)
// var crrT =now.getTime()
// console.log(now)
// var crrD =now.getDate()
// console.log(now)
// -------------------------------------CHAPTER 33------------------------------------------------------
// -------------------------------Specifying a date and time--------------------------------------------

// var crrDate = new Date()
// var birthDate =new Date ("March 11, 2005")
// var msBirthDate = birthDate.getTime()
// var msCrrDate = crrDate.getTime()
// var diff = msCrrDate - msBirthDate
// var age = diff / (1000*60*60*24*365)
// age= Math.round(age)
// console.log(age)
// -------------------------------------CHAPTER 34------------------------------------------------------
// -------------------------------Changing elements of a date and time----------------------------------

// var a = new Date()
// a.setMonth(0)
// console.log(a) 
// a.setDate(11)
// console.log(a) 
// a.setFullYear(2010)
// console.log(a) 
// a.setHours(2)
// console.log(a) 
// a.setMinutes(23)
// console.log(a) 
// a.setSeconds(45)
// console.log(a) 
// a.setMilliseconds(88)
// console.log(a) 
// -------------------------------------CHAPTER 35------------------------------------------------------
// -------------------------------Functions-------------------------------------------------------------

// function tellTime(){
//     var now = new Date()
//     var crrHr = now.getHours()
//     var crrMin = now.getMinutes()
//     var crrSec = now.getSeconds()
//     alert("time is " + crrHr + ":" + ":"+ crrMin +":"+ crrSec)
// }
// tellTime()
// -------------------------------------CHAPTER 36------------------------------------------------------
// -------------------------------Functions:Passing them data-------------------------------------------

// function greetUser (greeting){
//     alert (greeting)
// }
// greetUser("HELLO THERE")
// -------------------------------------CHAPTER 37------------------------------------------------------
// -------------------------------Functions:Passing data back from them---------------------------------

function calculateTotal (merchTot){
var orderTot;
if (merchTot >= 100){
    orderTot = merchTot
}
else if ( merchTot < 50.01){
    orderTot = merchTot + 5
}
else {
    orderTot = merchTot +5 + (0.3 * merchTot -50)
}
return orderTot

}
var total = calculateTotal()
console.log (total)


// -------------------------------------CHAPTER 38------------------------------------------------------
// -------------------------------Functions:Local vs. global variables----------------------------------
