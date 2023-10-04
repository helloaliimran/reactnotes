import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

const APIPostCallOnButtonClick = () => {
    const [id, setId] = useState(1);
    const [selectedId, setSelectedId] = useState(1);
    const [post, setPost] = useState({});

    const handleClick =()=>{
        setSelectedId(id)
    }
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
        .then(
            res => {setPost(res.data)
                console.log(res.data)
            }
        )
        .catch(err => console.log(err))}
    ,[selectedId])

    
    return (<div>

        <input type="text" value={id} onChange={e=> setId(e.target.value)} />
        <button type="button" onClick={handleClick}  >Fetch Post By Id</button>
        <p>{post.title}</p>
            </div>

    );

}

export default APIPostCallOnButtonClick;