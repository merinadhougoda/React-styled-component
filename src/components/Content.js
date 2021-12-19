import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
	border: 2px solid ${({ theme }) => theme.primary};
	border-radius: 2rem;
    display: flex;
	flex-direction: column;
	margin: 2rem;
	padding: 2rem;
`;

const Label = styled.label`
	font-size: 1.25rem;
`;

const Input = styled.input`
    display:block;
    width:100%;
	background-color:#ccc;
    height:2.5rem;
    margin: 0.5rem 0px 1rem;
    border-radius: 1rem;
    border: none;
`;


export const Content = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPasswordChange =(e)=>{
        setConfPassword(e.target.value);
      }
    const handleSubmit=(e)=>{
        if(password!==confPassword)
        {
          alert("Password Does Not Match");
        }
        else{
          alert('Form Submitted');
        }
        e.preventDefault();
      }
	return (
		<Form onSubmit={(e)=>{handleSubmit(e)}}>
			<div>
				<Label htmlFor="username">Username:</Label>
				<Input type="text" value={username} required onChange={(e)=>{handleUsernameChange(e)}} />
			</div>
            <div>
				<Label htmlFor="age">Age:</Label>
				<Input type="number" value={age} required onChange={(e)=>{handleAgeChange(e)}} />
			</div>
            <div>
				<Label htmlFor="email">Email:</Label>
				<Input type="email" value={email} required onChange={(e)=>{handleEmailChange(e)}}/>
			</div>
			<div>
				<Label htmlFor="password">Password:</Label>
				<Input type="password" value={password} required onChange={(e)=>{handlePasswordChange(e)}} />
			</div>
            <div>
				<Label htmlFor="confpassword">Confirm Password:</Label>
				<Input type="password" value={confPassword} required onChange={(e)=>{handleConfPasswordChange(e)}} />
			</div>
			<div>
				<button className="btn-primary" type="submit" value="submit">
					Sign In
				</button>
			</div>
		</Form>
	);
};

