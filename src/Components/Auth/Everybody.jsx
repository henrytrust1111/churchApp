import { Navigate, Outlet } from "react-router-dom"

const Everybody = ()=>{
    // const users = JSON.parse(localStorage.getItem("userData"))
    // console.log(users);
    // const email = localStorage.getItem("email")
    // console.log(email);
    // const password = localStorage.getItem("password")
    // console.log(password);
    // const isMember = email && password && users.find((e) => e.email === email && e.password === password)
    // console.log(isMember);
   return (
    <Outlet />
   )
 
}

export default Everybody