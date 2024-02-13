import express from "express"
import mysql from "mysql"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

app.use(express.json());

app.get("/", (req, res) => {
    res.json("hello from backend!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    
    db.query(q, (err, data) => {
        if (err) res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES(?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ];
    
    db.query(q, [values], (err, data) => {
        if (err) res.json(err);
        return res.json("Books has been created successfully!");
    });
})

app.listen(8800, () => { 
    console.log("Connected to Backend!");
})