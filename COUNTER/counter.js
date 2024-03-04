let counterval = document.getElementById("val");

function increment() {
    let preval = counterval.textContent;
    let newval = parseInt(preval) + 1;
    counterval.textContent = newval;
    if(newval>0)
    {
        counterval.style.color="green";
    }
    else if(newval<0)
    {
        counterval.style.color="red";
    }
    else
    {
        counterval.style.color="black"
    }
}

function decrement() {
    let preval = counterval.textContent;
    let newval = parseInt(preval) - 1;
    counterval.textContent = newval;
    if(newval>0)
    {
        counterval.style.color="green";
    }
    else if(newval<0)
    {
        counterval.style.color="red";
    }
    else
    {
        counterval.style.color="black";
    }
}

function reset() {
    counterval.textContent = 0;
    counterval.style.color="black";
}
