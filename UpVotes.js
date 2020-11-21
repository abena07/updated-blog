import React ,{useState }from 'react'

function UpVotes() {
    const[upvotes,setUpVotes]=useState(0)
    const handleUpVotes=()=> setUpVotes(upvotes+1)
    return (
        <div>
            {upvotes}
            <button style={{color:"blue"}}onClick={handleUpVotes}>Like</button>
        </div>
    )
}

export default UpVotes
