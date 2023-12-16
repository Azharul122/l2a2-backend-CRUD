# Mongoose CRUD with Express.js

### Installation

To check all post and put method download and install postman.

### To use it locally:
- clone this reprository
- After clone run command"npm install"
- create a new collection
- make file .env with name(mongodb_uri: ,port:5000, bcrypt_salt_step: )

After that hit the following endpoint:

#### Create user(userId,username,email unique)
- https://mongoose-crud-tau.vercel.app/api/users/

###### req body -
```JSON
{
    "user": {
        "userId": 2,
        "username": "a12",
        "password": "IslamAd",
        "fullName": {
            "firstName": "Azharul11",
            "lastName": "Islam"
        },
        "age": 30,
        "email": "a12@example.com",
        "isActive": true,
        "hobbies": [
            "praying",
            "Fishing",
            "praying"
        ],
        "address": {
            "street": "123 Main St",
            "city": "chapai",
            "country": "bd"
        }
    }
}


#### Fetch/Read all user(Set it to get Method)
- https://mongoose-crud-tau.vercel.app/api/users/

  
#### Fetch specific user(Set it to get Method)
- https://mongoose-crud-tau.vercel.app/api/users/1

  
#### update user(Set it to PUT Method)
- https://mongoose-crud-tau.vercel.app/api/users/1
###### Req body(userId,username,email unique) 
```JSON
{
        "userId": 2,
        "username": "a12345645",
        "fullName": {
            "firstName": "Azharul11",
            "lastName": "Islam",
            "_id": "657c9e69bb2f3cc8611a85a5"
        },
        "email": "a12@example.com",
        "age": 30,
        "hobbies": [
            "praying",
            "Fishing",
            "praying"
        ],
        "isActive": true
    }

#### Delete user(Set it to DELETE Method)
- https://mongoose-crud-tau.vercel.app/api/users/1
  
#### Add 0rder(Set it to PUT Method)
- https://mongoose-crud-tau.vercel.app/api/users/1/orders
###### Req body
```JSON
{
    "productName": "Samsung s23 ultra",
    "price": 1050,
    "quantity": 3
}
  
#### All 0rders(Set it to GET Method)
- https://mongoose-crud-tau.vercel.app/api/users/1/orders
  
#### All 0rders total price for specific user(Set it to GET Method)
- https://mongoose-crud-tau.vercel.app/api/users/1/orders/total-price

  
  


  


