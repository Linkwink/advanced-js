//------------Prototypes can be overwrtiten------------

function Constr() {}

Constr.prototype.someProp = "hello world";

var classInst = new Constr();

console.log(classInst.someProp); // "hello world"

Constr.prototype = {
	newProp: 'im new property',
	someProp: 'OMG'
};
console.log(classInst.someProp); // "hello world"
console.log(classInst.newProp); // undefined

var newInst = new Constr();

console.log(newInst.newProp); // "im new property"
console.log(newInst.someProp); // "OMG"


//------------Constructors return value------------ 

function Cons() {
	this.age = 21;
	this.sex = 'male';
	return 'spider';
}

var inst = new Cons().age;
console.log(inst); // 21


//------------constructor property------------

function SomeFunc(){
	this.value = 21;
} 
SomeFunc.prototype.newVal = 'hello';
SomeFunc.newVal = 233;

var inst = new SomeFunc();

console.log(inst.newVal); // 'hello'
console.log(inst.constructor.newVal); // 233


//------------wrapper objects vs primitive------------
typeof new Number(2) //"object"
typeof 1 //"number"


//------------primitive as objects------------

"hello world".length // 11
(12.342).toFixed(2); //"12.34"


//------------inheritance via the prototype------------

function Family(){
this.lastName = "Hromoy";
}
function Person(firstName){
this.name = firstName; 
}
Person.prototype = new Family();
Person.prototype.getFullName = function(){
	return this.name +' '+this.lastName;
};

var human1 = new Person('Slava');
human1.getFullName(); // "Slava Hromoy"

function Actions(){
	this.actions = this.getFullName() + ' is runing';
}
Actions.prototype = human1; //inherit one more time

var runingPerson = new Actions();

console.log(runingPerson.actions); // "Slava Hromoy is runing"


//------------Classical inheritance------------

function Parent(name,age){
this.firstName = name;
this.age = age;
}
Parent.prototype.getPerson = function(){
	return 'Person: '+ this.firstName + '; Age: ' + this.age + ';';
};

function Child(name,age){
	this.firstName = name;
	this.age = age;
}
inherit(Child,Parent);

// 1-st option
function inherit(C,P){
	C.prototype = new P();
}
//2-nd option 
function inherit(C,P){
	var F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
	C.prototype.constructor = C;
}

var father = new Parent("oleg",50);
var son = new Child("Slava",23);

console.log(father.getPerson()); //"Person: oleg; Age: 50;"
console.log(son.getPerson()); // "Person: Slava; Age: 23;"


//------------Clothures------------

function myFunc(x){
	return function(y){
		return x+y;
	};
}
myFunc(3)(4); // 7

// another exmpl
function myFunc() {
	var x = 21;
	return function y() {
		var x = 'hi';
		console.log(x); // 'hi'
	};
}


//------------hoisting------------

myname = "global"; 
function func() { 
    console.log(myname); 
    var myname = "local"; 
    console.log(myname); 
} 
func(); 
// undefined
// local

