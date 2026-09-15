# http module

hyper text transfer protocol
html - hyper text markup language
css - cascade style sheet

## STATUS CODES

- 200 -> OK
- 201 -> CREATED
- 202 -> ACCEPTED
- 204 -> NO CONTENT
- 400 -> BAD REQUEST
- 401 -> UNAUTHORIZED
- 403 -> FORBIDDEN
- 404 -> NOT FOUND
- 500 -> INTERNAL SERVER ERROR
- 503 -> SERVICE UNAVAILABLE

## Server can send data

1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## Server can set Header to send data

1. res.writeHeader( )
2. res.setHeader

## Server can set status code

1. res.statusCode( )
2. res.writeHeader( )

## request methods

1. get
2. post
3. put/patch
4. delete