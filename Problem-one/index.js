
var x = 10; 
var y = 11; 
var z = 12;

// A 

if( x < 10){
    console.log("A",true)
}else {
    console.log("A",false)
}

// B 

if ( y > 11){
    console.log("B",true)
}else{
    console.log("B",false)
}


// C 

if(x+y == 21){
    console.log("C",true)
}else{
    console.log("C=",false)
}


// D 

if((x*z) % 7 == 1){
    console.log("D",false)
}else{
    console.log("D",true)
}


// E 

if(y <= z){
    console.log("E",true)
}else{
    console.log("E",false)
}


// F 

if(!(x> y)){
    console.log("F",true)
}else{
    console.log("F",false)
}


// G 

if((x < y ) && (y<z)){
  console.log("G",true)
}else{
    console.log("G",false)
}

// H 

if ((x+y+z) % 3 ==1){
    console.log("H",true)
}else{
    console.log("H",false)
}


// I  

if((x>= y) || (y<z)){
    console.log("I",true)
}else{
    console.log("I",false)
}

//  J 

if(( x > y)  && (y < z )){
    console.log("J",true)
}else{
    console.log("J",false)
}

// k 

if(!(x%5 == 0 && y% 5 == 0)){
    console.log("K",true)
}else{
    console.log("K",false)
}


// L
if((x<y && z % 11 == 0) || (x% 10 ==0)){
    console.log("L",true)
}else{
    console.log("L",false)
}