// Closures

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');



// Async & Await 
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
};

const getData = async () => {
    console.log('Fetching...');
    const data = await fetchData();
    console.log(data);
};

getData();


 

// Higher order Functions 

function higherOrderFunction(fn) {
    return function() {
        console.log('Before executing the function');
        fn();
        console.log('After executing the function');
    };
}

function greet() {
    console.log('Hello, World!');
}

const decoratedGreet = higherOrderFunction(greet);
decoratedGreet();


// Currying

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5));  

// prototypes and inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('John', 30);
person1.greet();  // Output: Hello, my name is John


// Generators

function* generatorFunction() {
    yield 'First';
    yield 'Second';
    return 'Third';
}

const generator = generatorFunction();

console.log(generator.next().value);   
console.log(generator.next().value);  
console.log(generator.next().value);   



// Decoraters

function logExecutionTime(target, key, descriptor) {
    const original = descriptor.value;
    
    descriptor.value = function(...args) {
        console.time(key);
        const result = original.apply(this, args);
        console.timeEnd(key);
        return result;
    };
    
    return descriptor;
}







 


 