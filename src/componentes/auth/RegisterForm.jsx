import React, { useState } from 'react'
import '../../../public/css/formulario.css'
import { addUser } from '../users/addUser';
function RegisterForm() {
 const baseUrl ='https://6717f8c5b910c6a6e02abd14.mockapi.io/api/users'

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    password: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  function sendUser(e) {
    e.preventDefault();
    addUser(formData, baseUrl)
  }
  return (
    <form className="formLayout" onSubmit={sendUser} >
    <h3 className="formTitle">Registro de usuario</h3>
    <label htmlFor="email">Email</label>
    <input type="email" name='email' value={formData.email} onChange={handleChange} />
  <label htmlFor="firstName">Nombre</label>
  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>

  <label htmlFor="lastName">Apellido</label>
  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>

  <label htmlFor="birthdate">Fecha de nacimiento</label>
  <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange}/>



  <label htmlFor="gender">Sexo</label>
  <select name="gender" value={formData.gender} onChange={handleChange}>
    <option value="M">Masculino</option>
    <option value="F">Femenino</option>
    <option value="NB">No Binario</option>
    <option value="O">Otro</option>
  </select>

  <label htmlFor="password"> Contraseña</label>
  <input type="password" name="password" value={formData.password} onChange={handleChange} />

  <div className="formButtonContainer">
    <button type="submit">Enviar</button>
    <button type="reset">Borrar</button>
  </div>
</form>
  )
}

export default RegisterForm