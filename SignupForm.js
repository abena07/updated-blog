import React ,{useState}from 'react'

function SignupForm()
 {
  const[firstname,setFirstname]=useState("")
  const[lastname,setLastname]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[ confrimpassword,setConfirmPassword]=useState("")
  const[ SignedIn,setSignedIn]=useState(false)

  const handleFirstNameInput=(event)=>{
      setFirstname(event.target.value)
  }

  const handleLastNameInput=(event)=>{
      setLastname(event.target.value)
  }

  const handleEmail=(event)=>{
      setEmail=(event.target.value)
  }

  const handlePassword=(event)=>{
      setPassword=(event.target.value)
  }

  const handleConfirmPassword=(event)=>{
      setConfirmPassword=(event.target.value)
  }

  const handleSignedInInput=(event)=>{
      event.preventDefault()
      if(email==="abenabennett@gmail.com"&& password==="0123" && confrimpassword==="0123")
      setSignedIn(true)
  }

  const handleSignOut=(event)=>{
      setSignedIn(false)
  }
    return (
        <div>
            {SignedIn
            ?
            <>
            <p>Congratulations you have signed in!</p>
            <button onClick={handleSignOut}>Sign Out</button>

             </>
             :
             
             <form>
            <label>First Name:</label>
            <input type ="name"  value={firstname} onChange={handleFirstNameInput}/>

            <label>Last Name</label>
            <input type ="name" value={lastname} onChange={handleLastNameInput} />

            <label>Email:</label>
            <input type ="email" value={email} onChange={handleEmail}/>

            <label>Password</label>
            <input type ="password" value={password} onChange={handlePassword} />

            <label>Confirm Password</label>
            <input type ="password"  value={confrimpassword} onChange={handleConfirmPassword}/>

            <br></br>
            <button onClick={handleSignedInInput}>Sign In</button>
            
            </form>
                  
            }</div>
            

            
            
             
         
    )
}

export default SignupForm
