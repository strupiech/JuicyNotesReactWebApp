import React,{useState} from 'react';
import axios from 'axios';


function Register(bodyRequest){
    const url = "https://localhost:5001/api/user/register";
    //const endpoint = "api/user/register";
    const [res, setRes] = useState(null);

    axios.post(url, bodyRequest)
        .then(response =>{
            setRes(response.data)
        });

        console.log(res);
}

export default Register;