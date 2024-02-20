function rolldice(){
    const numofdice=document.getElementById("number").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];


    for(let i=0;i<numofdice;i++)
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.svg">`);
    }

    diceresult.textContent=`dice: ${values.join(', ')}`;
    diceimage.innerHTML=images.join('');
}