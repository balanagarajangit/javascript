let minNum=1;
let maxNum=100;
const answer = Math.floor(Math.random()*(maxNum-minNum +1));

console.log(answer);


let submitbtn = document.getElementById("submitbtn");
let output = document.getElementById("outanswer");

let attempts=0;
let running= true;

submitbtn.onclick=get;

function get()
{
    while(running)
{
    let ans = document.getElementById("ans").value;
    ans=Number(ans);
    if(isNaN(ans))
    {
        output.textContent="You entered value is not a number";

    }
    else if(ans<minNum||ans>maxNum)
    {
        output.textContent="Please enter vaild number";
    }
    else
    {
        attempts++;
        if(ans<answer)
        {
            output.textContent="Too low try again";
        }
        else if(ans>answer)
        {
            output.textContent="Too high try again";
        }
        else
        {
            output.textContent="You have guessed correct number, You took "+ attempts +" attempts to find the number";
        }
    }
    running=false;
}
if(ans==answer){
    running=false;
}
else{
    running=true;
}

}
