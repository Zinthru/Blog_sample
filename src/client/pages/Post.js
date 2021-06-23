import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Post() {

    let {postId} = useParams()

    const [post,setPost] = useState({})

    useEffect(()=>{
        Axios.get(`https://localhost:3001/api/getFromId/${postId}`)
        .then((data)=>{
            setPost({
                title: data.data[0].title,
                post_text: data.data[0].post_text,
                user_name: data.data[0].user_name,
            })
            // console.log(data);
        })
    },[]);

    return (
        <>
        <div className="Post">
            <h1>{post.title}</h1>
                <p>{post.post_text}</p>
            <h4>{post.user_name}</h4>
        </div>
        </>
    )
}