//javascript provides the fetch() API and third-party libs like axios to interact

//retrieve data using fetch()

//API:https://jsonplaceholder.typicode.com

//define a function for retrieve users data
const fetchUsers = async() => {
    //error handling
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //HTTP request to API
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json(); //converts the response to json (parse json data)
        console.log(users);
    }
    catch(error){
        console.error('Error fetching users',error);
    }
};

//function calling
fetchUsers();