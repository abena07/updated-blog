import React ,{useState} from 'react'

function DownVotes() {
    const[downvotes, setDownVotes]=useState(0)
    const handleDownVotes=() =>setDownVotes(downvotes+1)
    return (
        <div>
            {downvotes}
            <button style={{color:"purple"}}onClick={handleDownVotes}>Dislike</button >
        </div>
    )
}

export default DownVotes

