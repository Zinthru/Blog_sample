import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function MainPage () {

const [postList,setPostList] = useState({})
let history = useHistory();

useEffect(()=>{
    Axios.get('http://localhost:3001/api/get')
    .then((data)=>{
        setPostList(data.data)
        // console.log(data);
    }) 
},[])

return (
    <div className="MainPage">
        {/* <h1>MainPage</h1> */}
        <div className="PostContainer">

            {postList.map((val,key)=>{
               return  ( 
               <div className="Post" onClick={()=>{history.push(`/post/${val.id}`)}}>
                    <h1>{val.title}</h1>
                        <p>{val.post_text > 450 
                        ? val.post_text.substring(0,200) + '...': 
                        val.post_text}
                        </p>
                        <button onClick={alert('Thank you!')}>Like</button>
                        <button onClick={alert('You have been granted bad fortune.')}>Dislike</button>
                    <h4>{val.user_name}</h4>
                </div>
                )
            })}    
        </div>
    </div>
    )
}