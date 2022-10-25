const { data } = require("autoprefixer");

const domain = "localhost:4000/api/v1";



async function adduser(name,phoneNum,email,address) {
const user_submit_button=document.getElementById("user_submit_button");
const response =await fetch(`${domain}/adduser`, {
    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:`{ 
          "name":${name} , 
          "phoneNum": ${phoneNum}, 
          "email": ${email}, 
          "address": ${address} 
      }`
});
response.json().then(data=>{
    
})
    
}