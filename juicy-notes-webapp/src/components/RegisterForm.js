import React, { useState } from 'react';
import { RegisterWrapper, RegisterFormWrapper, InputWrapper, Span } from '../styles/RegisterForm';
import { Input } from '../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RegisterForm(props) {
    const { register, handleSubmit, watch, errors } = useForm();
    const registerUrl = "https://localhost:5001/api/user/register";
    const authenticateUrl = "https://localhost:5001/api/user/authenticate"
    const getUserUrl = "https://localhost:5001/api/user"
    const [res, setRes] = useState(null);

    let history = useHistory();

    const handleClickLogin = () => {
        history.push("/login");
    }

    const handleRegisterButton = async (data) => {

        props.toggle();
        history.push("/timeline");

        axios.post(registerUrl, data)
            ;

        let credential = {
            "Username": data.username,
            "Password": data.password
        }

        axios.post(authenticateUrl, credential)
            .then(response => {
                setRes(response.data)
            });


        // localStorage.setItem('JWT', res["token"]);




        /*let token = localStorage.getItem('token');
        //axios.defaults.headers.common['authorization'] = `bearer ${token}`; // for all requests
        const config = {
            method: 'get',
            url: `${getUserUrl}`,
            headers: {'Authorization': `bearer ${token}`}
        }

        let res = await axios(config);

        console.log(res);*/
    }

    return (
        <RegisterWrapper>
            <RegisterFormWrapper onSubmit={handleSubmit(handleRegisterButton)}>
                <InputWrapper>
                    <Input name="username" width="357px" height="60px" fontSize="1em" type="text" placeholder="Login" ref={register({ required: true, minLength: 3, maxLength: 20 })}></Input>
                    {errors.username && errors.username.type === "required" && <Span>Pole jest wymagane</Span>}
                    {errors.username && errors.username.type === "minLength" && <Span>Imię jest za krótkie</Span>}
                    {errors.username && errors.username.type === "maxLength" && <Span>Imię jest za długie</Span>}
                </InputWrapper>

                <InputWrapper>
                    <Input name="email" width="357px" height="60px" fontSize="1em" type="text" placeholder="Email" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}></Input>
                    {errors.email && errors.email.type === "pattern" && <Span>Właściwy format: xxxxx@xxxx.xxx</Span>}
                    {errors.email && errors.email.type === "required" && <Span>Pole jest wymagane</Span>}
                </InputWrapper>

                <InputWrapper>
                    <Input name="password" width="357px" height="60px" fontSize="1em" type="password" placeholder="Hasło" ref={register({ required: true })} ></Input>
                    {errors.password && errors.password.type === "required" && <Span>Hasło jest wymagane</Span>}
                </InputWrapper>

                <Input width="300px" height="44px" bgColor="#419bf9" fontSize="1em" type="submit" value="Zarejestruj"></Input>
                <Input width="300px" height="44px" bgColor="#f48473" fontSize="1em" type="button" value="Zaloguj się" onClick={() => handleClickLogin()}></Input>

            </RegisterFormWrapper>
        </RegisterWrapper>
    );
}

export default RegisterForm;