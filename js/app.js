let number = document.getElementById('number');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let dispNumber = document.getElementById('year');
let dispFact = document.getElementById('fact');
let factBox = document.getElementById('factBox');

button1.addEventListener('click', mathFact);
button2.addEventListener('click', triviaFact);
button3.addEventListener('click', yearFact);


function yearFact(){
    if(number.value==''){
        alert("Please enter any number...");
        return false;
    }

    else{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+number.value+'/year',true);

    xhr.onload = function(){
        if(this.status == 200){
            var getYear = this.responseText;
            factBox.style.display = 'block';
            dispNumber.innerHTML = "<h2>"+number.value+"</h2>";
            dispFact.innerHTML = "<p>"+getYear+"</p>";
            console.log(getYear);

        }
    }

    xhr.send();
}
}

function triviaFact(){

    if(number.value==''){
        alert("Please enter any number...");
        return false;
    }

    else{
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'http://numbersapi.com/'+number.value,true);

    xhr1.onload = function(){
        if(this.status == 200){
            var getTrivia = this.responseText;
            factBox.style.display = 'block';
            dispNumber.innerHTML = "<h2>"+number.value+"</h2>";
            dispFact.innerHTML = "<p>"+getTrivia+"</p>";

        }
    }

    xhr1.send();
}
}

function mathFact(){
    if(number.value==''){
        alert("Please enter any number...");
        return false;
    }

    else{
    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'http://numbersapi.com/'+number.value+'/math',true);

    xhr2.onload = function(){
        if(this.status == 200){
            var getMath = this.responseText;
            factBox.style.display = 'block';
            dispNumber.innerHTML = "<h2>"+number.value+"</h2>";
            dispFact.innerHTML = "<p>"+getMath+"</p>";

        }
    }

    xhr2.send();
}
}