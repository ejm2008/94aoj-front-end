import React, { useState } from 'react';

const Login = ({ authentication, currentAccount, validation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [valid, setValid] = useState(true);

  const changeValue = (event: any) => {
    const { name, value } = event.target;
    setFieldError(validation.validate(name, value));
    setValid(!validation.validate(name, value));
  };

  const login = async (event: any) => {
    event.preventDefault();
    const params = {
      login: email,
      password: password,
    };

    try {
      const response = await authentication.auth(params);
      currentAccount.set(response);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('finally');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">email</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => { setEmail(e.target.value); changeValue(e); }} 
            placeholder="Username" 
          />
          <span>{fieldError}</span>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => { setPassword(e.target.value); changeValue(e); }} 
            placeholder="Password" 
          />
        </div>
        <button type="submit" disabled={!valid}>Login</button>
      </form>
    </div>
  );
};

export default Login;