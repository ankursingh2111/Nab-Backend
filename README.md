# Nab-Backend

Steps to start the server

1. Install node
2. Clone the repository
3. Run "docker-compose up dev" to start the serer in development mode
4. Express server will start on port 8080

To check that the server is running

1. docker ps ( this will show the hostport on which docker container is exposed i.e. 8080)
2. Make httprequest to the server to get the response.

To run the test

1. "docker-compose up ci"

Assumption:
Data will be strctured as shown in inptData.js file
