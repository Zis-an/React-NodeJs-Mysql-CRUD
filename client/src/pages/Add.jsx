import axios from "axios";
import React, { useState } from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [book, setBook] = useState({
        title:"",
        desc:"",
        price: null,
        cover:""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(book);

    return (
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text" name="title" onChange={handleChange} placeholder="Enter Title Here" />
            <input type="text" name="desc" onChange={handleChange} placeholder="Enter Description Here" />
            <input type="text" name="cover" onChange={handleChange} placeholder="Enter Cover Here" />
            <input type="number" name="price" onChange={handleChange} placeholder="Enter Price Here" />
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add