import axios from "axios";
import React, { useState } from "react";
import "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

    const [book, setBook] = useState({
        title:"",
        desc:"",
        price: null,
        cover:""
    });

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/books/" + bookId, book)
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(book);

    return (
        <div className="form">
            <h1>Update Book</h1>
            <input type="text" name="title" onChange={handleChange} placeholder="Enter Title Here" />
            <input type="text" name="desc" onChange={handleChange} placeholder="Enter Description Here" />
            <input type="text" name="cover" onChange={handleChange} placeholder="Enter Cover Here" />
            <input type="number" name="price" onChange={handleChange} placeholder="Enter Price Here" />
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update