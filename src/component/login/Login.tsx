import React, { useState } from 'react';
 const Login = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [isLogined,setisLogined]=useState(false);

// const handleInputChange = (event:SyntheticEvent) => {
//     switch(event.target.name){
//         case 'username':
//             setusername(event.target.value);
//             break;
//         case 'username':
//             setpassword(event.target.value);
//             break;
//     }
// }
const submitClick=() =>
{
if((username=="admin@123") &&   (password=="admin123"))
{
   setisLogined(true);
}
}

return (
<div>
<input type="text" name="username" onChange={(e)=>{
    setusername(e.target.value);
}} />
<input type="password" name="password" onChange={(e)=>{
    setpassword(e.target.value);
}} /> 
<button  name="submit" onClick={submitClick}> Submit</button>
</div>);
}

export default Login;