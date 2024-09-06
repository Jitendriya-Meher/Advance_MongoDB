const express = require('express');
const app = express();

require("./connection")

const PORT = 4000;

app.listen(PORT , () => {
    console.log(`server start at port ${PORT}`);
});