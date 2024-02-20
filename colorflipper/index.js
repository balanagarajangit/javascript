const box = document.querySelector("#box");
const colorHead = document.querySelector("#colorhead");
const btn = document.querySelector("#btn");
const randomcolor = ["red","blue","green","purple"];


btn.addEventListener("click",()=>{
    
    let ranNum = Math.floor(Math.random()*randomcolor.length);
    document.body.style.backgroundColor=randomcolor[ranNum];
    colorHead.textContent=`Background color : ${randomcolor[ranNum]}`
    
})



// const fetchData = fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{
//     return response.json();
// }).then(users=>{
//     users.forEach(element => {
//         console.log(element)
//     });
// }).catch(error =>{
//     console.error("cant able to fetch data"+error);
// })

const users = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments",{
        method: "GET",
        headers:{
            Accept: 'text/plain'
        }
    })
    const userData = await response.text()
    console.log(userData);
}
    
    
users();