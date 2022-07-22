import { useState } from "react";

import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


import "./styles/App.css"

function App() {
    
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript 1", body: "Description"},
        {id: 2, title: "Python 2", body: "AS"},
        {id: 3, title: "JavaScript 3", body: "Description"},
        {id: 4, title: "JavaScript 4", body: "Description"},
    ])

    const [selectedSort, setSelectedSort] = useState("");

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <MySelect
                value={selectedSort}
                onChangeSelect={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"}
                ]}
            />
            {posts.length !== 0
                ? <PostsList remove={removePost} posts={posts} title="Посты про JS"/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>        
            }            
        </div>
    );
}

export default App;
