"use client";

import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateToDo() {

    const [toDo, setTodo] = useState({
        title: "",
        detail: "",
    })

    async function handleSubmit() {
        const docRef = await addDoc(collection(db, "todos"), toDo)
        setTodo({
        title: "",
        detail: "",
        });
    }
    
   
    return (
        <>
        <form>
            <label>Title:</label>
            <br/>
            <input 
            onChange={(e) => setTodo({ ...toDo, title: e.target.value })}
            type="text"
            value={toDo.title}
            ></input>
            <label>Title:</label>
            <br/>
            <textarea
            onChange={(e) => setTodo({ ...toDo, detail: e.target.value })}
            value={toDo.detail}
            ></textarea>
        </form>
        <button onClick={handleSubmit}>Add To Do</button>
        <p>{JSON.stringify(toDo)}</p>
        </>
    )
}