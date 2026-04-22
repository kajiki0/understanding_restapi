//POST method to create a new resource
//remember that fetch() is a function to handle general HTTP requests, not only for retrieve data (GET method)

//sending data using the POST method with the fetch() API

//API:https://jsonplaceholder.typicode.com

const createUser = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST', //the HTTP method
            headers:{
                'Content-Type':'application/json', //use JSON format
            },
            body: JSON.stringify({ //convert javascript object to JSON
                name: 'Davi Brito',
                email: 'davi.brito@gemail.com',
            }),
        });

        const newUser = await response.json(); //Parse JSON response
        console.log(newUser);
    }catch(error){
        console.error('Error creating user:',error);
    }
}

createUser();