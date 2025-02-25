import { useState } from 'react'
import './style.css'

function TelaHome() {
  return (
    <div>
      <img src="/images/logoneto.png" alt="Logotipo" className='logo' />

      <div className='div01'>
        <div className='div-text01'>
          <button className='button01'>Inicio</button>
        </div>
        <div className='div-text02'>
          <button className='button02'>Resumo</button>
        </div>
        <div className='div-text03'>
          <button className='button03'>Sobre me</button>
        </div>
        <div className='div-text04'>
          <button className='button04'>Contato</button>
        </div>
      </div>
      <div>
        <div className='div02'>
          <h3 className='text1'>OLa, eu me chamo </h3>
          <h1 className='text2'>Espedito Neto</h1>
          <p className='text3'>- Um desenvolvedor web e mobile dedicado e apaixonado <br></br>
            pela tecnologia em costante evolução, onde a tecnologia e <br></br>
            suas possibilidade são ilimitadas</p>
          <button className='button05'>Contrata me</button>
        </div>
      </div>
      <div className='div03'></div>

      <div className='div04'></div>
      <div>
        <p className='text4'>TEXTO TEXTO TEXTO</p>
      </div>
      <div>
        <div className='div05'>
          <div className='div06'>
            <text>TEXTO TEXTO</text>
          </div>
        </div>
        <button className='button06'>TEXTO TEXTO</button>
      </div>
    </div>
  );
}

export default TelaHome;
