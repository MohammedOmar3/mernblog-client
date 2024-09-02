import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://mern-blog-202bd7c78370.herokuapp.com/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, [posts]);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
        </>
    );
}