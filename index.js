
var name ='safa';
function add (x,y){

    const total = x + y;
    console.log(total);
    
}

add(67,8)




// golbal Scope

var yourName ='chandon';
function myName() {
    var MyFullName='chandon chorto';
    console.log(MyFullName);
    var MyFullName ='text';
    console.log(yourName);
    yourName='fariya';
    return yourName
    
}
myName()
console.log(yourName);

primittive 

let a ='Hello';
let b = a;
a = 'gello' 
console.log(a);

console.log(b);

// non-primittive

const x = {
 name:'sakib al hasan',
 job:'cricketer'
}

const y = x 
console.log(x,y);







