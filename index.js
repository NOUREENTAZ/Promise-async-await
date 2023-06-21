//Q1

function multiply(num1, num2, callback) {
    let output = num1 + num2;
    callback(output);
}

function addition(output) {
    console.log('The result is: ' + output);
}

multiply(100, 100, addition);

function mainDis(o) {
    document.getElementById("first").innerHTML = o;

}

function mainCalc(n1, n2, callback) {
    let s = n1 + n2;
    callback(s);
}
mainCalc(10, 10, mainDis);


//Q2
// const everysecondchange = (cl) => {

//     for (let i = 1; i <= cl; i++) {
//         setTimeout( () => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// everysecondchange(7);

// for (var i = 1; i <= 7; i++) {
//     print(i);

// }


// function print(i) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000);
// }
// console.log("Done!");
const print_after_1_sec = (n) => {
    for (let i = 1; i <= n; i++) {
        setTimeout(() => {
            console.log(i)


        }, i * 1000)
    }

}
print_after_1_sec(7);

// const printNumbersForEvery2Sec = (n) => {
//     for (let i = 1; i <= n; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 2000)
//     }
// }
// printNumbersForEvery2Sec(10);

//Q3
function PrintAll(val, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(val);
            res('Promise is resolves')
        }, timeout);
    })
}
PrintAll(1, 1000)
    .then(() => PrintAll(2, 2000))
    .then(() => PrintAll(3, 3000))
    .then(() => PrintAll(4, 4000))
    .then(() => PrintAll(5, 5000))
    .then(() => PrintAll(6, 6000))
    .then(() => PrintAll(7, 7000))
    .then((data) => console.log("!Done"))

//Q4

function done() {
    console.log("Promise Resolved");
}

function error() {
    console.error("Promise Rejected");
}

var promise = new Promise((resolve, reject) => {
    resolve();
    reject();
});

promise.then(done).catch(error);






//Q5    
// Callback Function Example
function Details(name, Display) {
    console.log("Name of Person");
    // callback function
    // executed only after the Details() is executed
    Display(name);

}
// callback function
function saySomething(name) {
    console.log("I am " + ' ' + name);
}
// calling the function after 2 seconds
setTimeout(Details, 2000, "Noureentaz", saySomething);




//Q6  
let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 2000)
        }, 4000)
    }, 6000)
}

const animate = (word) => {
    word.classList.add("animate");
}

animateAll(animate);

setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('3')
            setTimeout(() => {
                console.log('4')
                setTimeout(() => {
                    console.log('5')
                    setTimeout(() => {
                        console.log('6')
                        setTimeout(() => {
                            console.log('7')

                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);


//Q7.
let variable = new Promise(function(res, rej) {
    const a = "Prepbytes.com";
    const b = "Prepbytes.com";
    if (a === b) {
        res();
    } else {
        rej();
    }
});
variable.then(function() {
    console.log("Success");
}).catch(function() {
    console.log("failed");
});






//Q8
function myDisplaye(s) {
    document.getElementById("main").innerHTML = s;
}
async function myfirstFunction() {
    return "I am from Karnataka";
}
myfirstFunction().then(
    function(value) {
        myDisplaye(value);
    },
    function(error) {
        myDisplaye(error);
    }
);

async function myDisplay() {
    let myPromiseval = new Promise(function(myRes, myRej) {
        myRes("Always Be Happy");
    });
    document.getElementById("m").innerHTML = await myPromiseval;
}
myDisplay();

//q9.
const varprm = new Promise((res, rej) => {
    if (true) {
        res("resolve part");
    } else {
        rej("reject part");
    }

})

function promiseAll() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Promise is resolved');

        })

    })
}
Promise.all([varprm, promiseAll()])
    .then((data) => console.log(...data))
    .catch((error) => console.log(error))