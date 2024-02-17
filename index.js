// document.getElementById("counter_value");

let count = 0;

let totalVisitors = document.getElementById("counter_value");

function NewVisitor(){
    count = count +1;
    totalVisitors.innerText = count;
}

function ResetVisitorCount(){
    count = 0;
    totalVisitors.innerText = count;
}
