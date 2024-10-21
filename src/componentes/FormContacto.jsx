import React from 'react'
import '../../public/css/formulario.css'
import Pages from '../componentes/layouts/Pages';

function FormContacto() {
   
  return (
    <>
  <Pages>
<form>
    <h3>Si gustas contactarme para seguir aprendiendo o jugar</h3>
 
    <div className="formulario">
        <label htmlFor="text">Nombre: </label>
        <input type="text" name="nombre" id="nombre"/>
        <label htmlFor="integer">Telefono: </label>
        <input type="tel" name="tel" id="tel"/>
        <label htmlFor="mail">E-mail: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="text-area">Comentario: </label>
        <textarea name="comentario" id="comentario"></textarea>
        <fieldset className="genero">
        <input type="radio" name="radio" id="radio1"/>
        <label>Aprender</label>
        <input type="radio" name="radio" id="radio2"/>
        <label>Jugar</label>
        </fieldset>
        
        <div className="btn">
        <button type="reset" id="btn-reset">Borrar</button>
        <button type="submit" id="btn-enviar">Enviar</button>
        </div>
        </div>
    </form>
    </Pages>
    </>
  );
}

export default FormContacto;