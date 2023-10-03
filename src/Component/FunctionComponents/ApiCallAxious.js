import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCallAxious =()=>{

const [apiData,setApiData]= useState([]);

useEffect(()=>{

 axios.get('https://jsonplaceholder.typicode.com/posts')
 .then(res=>{
    console.log(res.data);
    setApiData(res.data);
 })
 .catch(err=>{console.log(err)});   
},[])
return(<div>
    <p>axios api get call example.</p>
<ul>
    
    {apiData.map(post=> <li key={post.id}>{post.title}</li>)}
</ul>
</div>)
}

export default ApiCallAxious;