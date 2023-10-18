import axios from 'axios';
import React, { useState } from 'react';

export default function AddUser() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const { name, username, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username.startsWith('@')) {
      alert('El nombre de usuario debe comenzar con "@"');
      return;
    }

    const userData = {
      name,
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:5173/', userData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Registro de Usuario</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Nombre
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Ingresa tu nombre'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Nombre de Usuario
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Ingresa tu nombre de usuario (empieza con @)'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Correo
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingresa tu correo'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Contraseña
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='Ingresa tu contraseña'
                name='password'
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              Registrar
            </button>
            <button type='reset' className='btn btn-outline-danger mx-2'>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
