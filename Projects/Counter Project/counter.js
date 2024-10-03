const decreaseB = document.getElementById("decreaseID");
const resetB = document.getElementById("resetID");
const increaseB = document.getElementById("increaseID");
const counterS = document.getElementById("numberID");

let count = 0;

decreaseB.onclick = function()
{
    count--;
    counterS.textContent = count;
}

resetB.onclick = function()
{
    count = 0;
    counterS.textContent = count;
}

increaseB.onclick = function()
{
    count++;
    counterS.textContent = count;
}

