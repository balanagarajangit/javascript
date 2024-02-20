function generatePassword(length,passwordLowercase,passwordUppercase,includeNumbers,includeSymbols){
    const lowercasechars="abcdefghijklmnopqrstuvwxyz"
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberchars="0123456789";
    const symbols="!@#$%^&*()_-+=";

    let allowedChars="";
    let password="";

    allowedChars += passwordLowercase ? lowercasechars: "";
    allowedChars += passwordUppercase ? uppercasechars: "";
    allowedChars += includeNumbers ? numberchars: "";
    allowedChars += includeSymbols ? symbols: "";

    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length===0){
        return `(at least 1 set of character needs to be selected)`;
    }
    
    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}

const passwordLength=10;
const passwordLowercase=true;
const passwordUppercase=true;
const includeNumbers=true;
const includeSymbols=true;


const pass=generatePassword(passwordLength,passwordLowercase,passwordUppercase,includeNumbers,includeSymbols);
console.log(`Generated Password : ${pass}`);