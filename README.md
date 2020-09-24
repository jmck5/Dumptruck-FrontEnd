# DumpTruck
Dump truck is a note taking app of which this is the Angular frontend. It communicates via a REST API with the backend. 
At present a user can add and delete short text messages. There is a rudimentary login system that uses Json web tokens to check if a user is logged in. 
Note at present the app is only designed for a single user and the login system is very insecure. The 'database' at present is just a JSON file.
A javascript backend that can be run using node is in a private repo that can e made available on request.

ToDo
Implement an actual database, maybe MYSQL or MongoDB
Order the notes by my recent, and filter/search for notes containing certain words. 
Produce a downloadable text file summary.
Summarise notes only containing keywords.
Implement refresh tokens.
Implement multiple users


