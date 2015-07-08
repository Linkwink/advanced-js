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