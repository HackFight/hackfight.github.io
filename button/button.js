let count = 0;

const button = document.getElementById('button');
const text = document.getElementById('counter');

button.addEventListener('click', function()
{
    IncrementCount();
});

function IncrementCount()
{
    count = count + 1;
    text.innerText = count;
    if (count >= 500)
    {
        button.style.boxShadow = "0px 5px 10px 0px yellow"
    }
    else if (count >= 100)
    {
        button.style.boxShadow = "0px 5px 10px 0px purple"
    }
    else if (count >= 50)
    {
        button.style.boxShadow = "0px 5px 10px 0px green"
    }
    else if (count >= 10)
    {
        button.style.boxShadow = "0px 5px 10px 0px blue"
    }
}

button.addEventListener('mouseenter', function(){
    if (count >= 500)
    {
        button.style.boxShadow = "0px 10px 20px 2px yellow"
    }
    else if (count >= 100)
    {
        button.style.boxShadow = "0px 10px 20px 2px purple"
    }
    else if (count >= 50)
    {
        button.style.boxShadow = "0px 10px 20px 2px green"
    }
    else if (count >= 10)
    {
        button.style.boxShadow = "0px 10px 20px 2px blue"
    }
});

button.addEventListener('mouseleave', function(){
    if (count >= 500)
    {
        button.style.boxShadow = "0px 5px 10px 0px yellow"
    }
    else if (count >= 100)
    {
        button.style.boxShadow = "0px 5px 10px 0px purple"
    }
    else if (count >= 50)
    {
        button.style.boxShadow = "0px 5px 10px 0px green"
    }
    else if (count >= 10)
    {
        button.style.boxShadow = "0px 5px 10px 0px blue"
    }
});

button.addEventListener('mousedown', function(){
    if (count >= 500)
    {
        button.style.boxShadow = "0px 5px 10px 0px yellow"
    }
    else if (count >= 100)
    {
        button.style.boxShadow = "0px 5px 10px 0px purple"
    }
    else if (count >= 50)
    {
        button.style.boxShadow = "0px 5px 10px 0px green"
    }
    else if (count >= 10)
    {
        button.style.boxShadow = "0px 5px 10px 0px blue"
    }
});

button.addEventListener('mouseup', function(){
    if (count >= 500)
    {
        button.style.boxShadow = "0px 10px 20px 2px yellow"
    }
    else if (count >= 100)
    {
        button.style.boxShadow = "0px 10px 20px 2px purple"
    }
    else if (count >= 50)
    {
        button.style.boxShadow = "0px 10px 20px 2px green"
    }
    else if (count >= 10)
    {
        button.style.boxShadow = "0px 10px 20px 2px blue"
    }
    console.log("UP");
});