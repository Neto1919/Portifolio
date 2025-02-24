import { useState } from 'react'
import './style.css'

function TelaHome() {
  return (
    <div>
      <div className='div-text01'>
        <h2 className='texto01'>Inicio</h2>
      </div>
      <div className='div-text02'>
        <h2 className='texto02'>Resumo</h2>
      </div>
      <div className='div-text03'>
        <h2 className='texto03'>Sobre me</h2>
      </div>
      <div className='div-text04'>
        <h2 className='texto04'>Contato</h2>
      </div>
      <div>
        <div>
          <h3 className='text1'>OLa, eu me chamo </h3>
        </div>
      </div>
    </div>
  );
}

export default TelaHome;
