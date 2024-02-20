function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(total)

function getAvg(...numbers)
{
    let result=0;
    for(let number of numbers)
    {
        result=result+number;
    }
    return result/5;
}

const avg = getAvg(1,2,3,4,5);
console.log(avg);

//rest=allow a function work with a variable num of arguments by bundling them into an array