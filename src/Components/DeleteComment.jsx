import { useEffect, useState } from "react";
import { DeleteSingleComment } from "../api";


const DeleteComment = ({comment_id, setIsDeleted}) => {

    const [isBeingDeleted, setIsBeingDeleted] = useState(false)

    const handleDeleteComment = (event) =>{
        event.preventDefault();
        setIsBeingDeleted(true)
        setIsDeleted(false)
    }

    useEffect(()=>{
        if (isBeingDeleted){
        DeleteSingleComment(comment_id)
        .then(() => {
            setIsBeingDeleted(false)
            setIsDeleted(true)

     })
    .catch((error)=>{
        setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`);
        setIsBeingDeleted(false)
        setIsDeleted(false)
    })
}
    },[isBeingDeleted])

    if (isBeingDeleted) return <p>Deleting comment...</p>

    return (
        <button onClick={handleDeleteComment}>
              Delete
            </button>
    )
}

export default DeleteComment