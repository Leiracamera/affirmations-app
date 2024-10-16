import express from "express"
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://www.affirmations.dev/");

        const quote = response.data.affirmation;

        res.render("index.ejs", { quote });
    } catch (error) {
        console.error("Error fetching the quote:", error.message);
        res.render("index.ejs", { quote: null, error: "Unable to fetch the quote at the moment." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});