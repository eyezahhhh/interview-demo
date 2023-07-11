# Interview Demo Project

This project demonstrates the ability to interact with Node.js, PostgreSQL, REST APIs and optionally NGINX. This project requires a PostgreSQL database.


---


# Setup

This project is a regular NestJS program, so it should be run using ```npm run start```. Once the program has been started for the first time, it'll create a `Config.json` file which should be modified to include credentials to the database.


---



# Docs
This project features an API for a todo list, with endpoints for creating, deleting, and getting entries.

## Todo entity
```yaml
{
    id: string
    message: string
    timestamp: string
}
```



## Create entry
Creates an entry for the todo list.


### Parameters

### **`message`**
The text that should be in the entry.


### Request
```yaml
PUT /todo

{
    message: string
}
```


### Response
Todo entity.


---


## Delete entry
Deletes an entry from the todo list.


### Parameters

### **`ID`**
The unique ID of the entry.


### **`Request`**
```yaml
DELETE /todo/{ID}
```


### Response
Todo entity.


---


## Get todo list
Obtains all entries in the todo list.


### Request
```yaml
GET /todo
```


### Response
Array of Todo entities.


---


## Get entry
Obtains an entry in the todo list.


### Parameters

### **`ID`**
The unique ID of the entry.


### **`Request`**
```yaml
GET /todo/{ID}
```


### Response
Todo entity.