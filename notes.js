let a = 1;

function l2() {
    let b = 5;
    console.log(a);
    console.log(b + a);
}

let lesson = function (x) {
    let b = 2;

    console.log(x + b);

}

lesson(a);
l2();

function whodat() {

    let name = prompt("what is your name?")
    //let name = console.Readline();
    if (name != 'Kris') {
        alert("ERROR");
    } else {
        alert("Hello, " + name);
    }

    
}