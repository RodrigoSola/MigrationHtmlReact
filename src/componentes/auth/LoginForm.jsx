import React from 'react'
import '../../../public/css/formulario.css'

function LoginForm() {
  return (
    <form className="formLayout">
    <h3 className="formTitle">Login de usuario</h3>
    <label htmlFor="email">Email</label>
    <input type="email" name='email' />

  <label htmlFor="password">Ingrese su Contraseña</label>
  <input type="password" name="password" />

  <div className="formButtonContainer">
    <button type="submit">Enviar</button>
    <button type="reset">Borrar</button>
  </div>
</form>
  )
}

export default LoginForm