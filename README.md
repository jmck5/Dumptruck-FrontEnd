# DumpTruck
Dump truck is a note taking app of which this is the Angular frontend. It communicates via a REST API with the backend. \
At present a user can add and delete short text messages. \ 
~~There is a rudimentary login system that uses Json web tokens to check if a user is logged in. 
Note at present the app is only designed for a single user and the login system is very insecure. The 'database' at present is just a JSON file.
A javascript backend that can be run using node is in a private repo that can e made available on request.~~ \
The login system uses jwts combined with microsoft identity in the backend. The app should now handle multiple users (though this is a backend rather than front end change). \
This is currently designed to be used with the c#/dotnet backend "Dumptruck v4". \


ToDo \
~~Implement an actual database, maybe MYSQL or MongoDB~~ Backend using mariaDB. \
Order the notes by my recent, ~~and filter/search for notes containing certain words.~~ (filtering has been implemented) \
Produce a downloadable text file summary. \
Summarise notes only containing keywords. \
~~Implement refresh tokens.~~ Not sure why I wanted to do  this? \
~~Implement multiple users~~ 


