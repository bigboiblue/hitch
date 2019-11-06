import app from "../app";

const PORT = parseInt(process.env.PORT) || 8081;
process.env.PORT = PORT.toString();

app.listen(PORT, (): void => console.log(`Server running on port: ${PORT}`));

//// Server error handling here ////
//// e.g.  app.on('error', onError); ////
