import express from "express";
// import bodyParser from 'body-parser';
import cors from "cors";
// import morgan from 'morgan';
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


app.get('/api/questions', (req, res) => {
    fs.readFile("./questions.json", "utf8", (err, data) => {
        if (err) {
            // console.error("Error reading questions file:", err);
            return res.status(500).send({ message: "Internal Server Error" });
        }
        const questions = JSON.parse(data);
        res.status(200).json({ success: true, questions });
    }); 
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
