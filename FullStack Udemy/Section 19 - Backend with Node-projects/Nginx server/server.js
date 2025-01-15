//http to listen req coming, fs to handle files, path to mange pathe handling in terminal run pwd to know current working directory
const http = require("http");
const fs = require("fs");
const path = require("path");

//computer has lots of ports for different works and purposes create one which is often free
const port = 3000;

//createServer will create a server to do some task callback fun code do what you want to do
const server = http.createServer((req, res) => {
  // req.url === "/" => "index.html" idea how to do
  //logic to handle the requests coming in url
  //if url is / then send index.html else send file which they ask for like /about.html etc. or not found then 404 end the res

  //get the current directory path
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  //extracting the .type coming from the req.url
  const extName = String(path.extname(filePath).toLowerCase());
  // checking file type supports
  const mimeType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javaScript",
    ".png": "text/png",
  };
  // content type fixing and selecting from mimeType object created above
  const contentType = mimeType[extName] || "application/octet-stream";
  //read the file from the path
  fs.readFile(filePath, (err, content) => {
    // if any error then do this else display content
    if (err) {
      if (err.code === "ENOENT") {
        //file not found error
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal server error" + err);
      }
    } else {
      //write response once done end res listening
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

//listening continuous on some port defined 3000 and two arguments port to listen and what to do callback
server.listen(port, () => {
  console.log("Server is Listening at Port " + port);
});

//teaches lots of things like debugging and finding logic error and other errors which make when i make my note but ya the knowledge i have i made things possible to display it grate to see
