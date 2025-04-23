import { useState } from "react";
import "./App.css";
import generateRandomPost from "./GeneratePost";

const examplePosts = [
  {
    name: "Ogli",
    emoji: "😭",
    text: "Very cool post",
    id: 1,
    image: "https://i.pravatar.cc/48?u=asd",
  },
  {
    name: "Taga",
    emoji: "💓",
    text: "Very trash post",
    id: 2,
    image: "https://i.pravatar.cc/48?u=asd23",
  },
];

export default function App() {
  const [feed, setFeed] = useState(examplePosts);

  function handleDelete(id) {
    setFeed((prevFeed) => prevFeed.filter((post) => post.id !== id));
  }

  // Обработчик для добавления случайного поста
  function handleGeneratePost() {
    const newPost = generateRandomPost();
    setFeed((prevFeed) => [newPost, ...prevFeed]);
  }

  return (
    <div className="App">
      <div className="form-container">
        <Form setFeed={setFeed} />
        <button className="generate-post" onClick={handleGeneratePost}>
          Generate Random Post
        </button>
      </div>
      <div className="posts-container">
        <PostList feed={feed} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

function Form({ setFeed }) {
  const [description, setDescription] = useState(
    "Description for random shit post"
  );
  const [title, setTitle] = useState("Random shit");
  const [smile, setSmile] = useState("🧑");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAdd(e) {
    e.preventDefault();

    const newPost = {
      name: title,
      emoji: smile,
      text: description,
      image: `${image}?u=${crypto.randomUUID()}`,
      id: crypto.randomUUID(),
    };

    setFeed((prevFeed) => [newPost, ...prevFeed]);

    setTitle("");
    setSmile("");
    setDescription("");
  }

  return (
    <form onSubmit={handleAdd}>
      <label>Post name</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Post emoji</label>
      <input
        type="text"
        value={smile}
        onChange={(e) => setSmile(e.target.value)}
      />
      <label>Post text</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Post image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PostList({ feed, handleDelete }) {
  return (
    <>
      {feed.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete} />
      ))}
    </>
  );
}

function Post({ post, handleDelete }) {
  return (
    <div className="post">
      <h1>
        {post.name} {post.emoji}
      </h1>
      <p>{post.text}</p>
      {post.image && <img src={post.image} alt={post.name} />}
      <button onClick={() => handleDelete(post.id)}>❌</button>
    </div>
  );
}
