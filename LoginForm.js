import React ,{useState} from 'react'
import Home from '../Home'

function LoginForm() {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[LoggedIn, setLoggedIn]=useState(false)

    const handleEmailInput = (event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }
    const handleLogIn=(event)=>{
        event.preventDefault()
        if(email==="abenabennett@gmail.com" && password==="0123")
        setLoggedIn(true)
    }

     const handleLogOut=(event)=>{
        setLoggedIn(false)
    }
    return (
        <div>
            {LoggedIn
            ?
            <>
            <Home/>
            <button onClick={handleLogOut}>Logout</button>
            </>
            :
            <>
            <form>
            <label>Email:</label>
            <input type =" email" value={email} onChange={handleEmailInput}/>

            <label>Password:</label>
            <input type ="password" value={password} onChange={handlePasswordInput}/>

            <br></br>
            <button onClick={handleLogIn} > LogIn</button>
            </form>
            </>}
        </div>
    )
}

export default LoginForm
