# Build your own NginX Server with Node.js

Various web servers are popular in market like apache then nginx

Nginx
- This is a HTTP and reverse proxy server
- Building Serving static and index files auto indexing
- It is a web server that can be used to serve static files, act as a reverse proxy

Architecture of Nginx
- A computer contains server.js file which actually act as a server
- server.js have the access to read and serve file of index.html, other files
- server.js also listening continuously to the port defined in server.js file and server to the specific path to specific file from computer
- Browser makes a req to the computer to get /index.html and server.js listen it and res with file demanded index.html to server to the browser.

Lets build our own server.js