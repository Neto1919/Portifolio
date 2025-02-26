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
        <p className='text4'>Sobre mim</p>
        <p className='text5'>Olá! Meu nome é Espedito Neto. Concluí o curso técnico em Informática no Campus Esperança do IFPB.
          Durante minha formação técnica, desenvolvi habilidades em programação, especialmente em JavaScript, além de dominar as
          tecnologias HTML 5 e CSS 3. Também tenho conhecimento em SQL, o que me permite gerenciar e manipular bancos de dados de
          forma eficiente. Além disso, tenho experiência com frameworks como Nest.js e Vite, ferramentas essenciais para o
          desenvolvimento de aplicações web modernas.</p>
          <p className='text6'>Atualmente, estou cursando o Bacharelado em Estatística na Universidade Estadual da Paraíba (UEPB). Estou ansioso para aplicar meus conhecimentos em projetos práticos e continuar desenvolvendo minhas habilidades em tecnologia.</p>
      </div>
      <div>
        <div className='div05'>
          <div className='div06'>
            <text className='textcaixa'>Html5</text>
          </div>
          <div className='div07'>
            <text className='textcaixa'>Css3</text>
          </div>
          <div className='div08'>
            <text className='textcaixa'>JavaScript</text>
          </div>
          <div className='div09'>
            <text className='textcaixa'>SQL</text>
          </div>
          <div className='div10'>
            <text className='textcaixa'>Next.js</text>
          </div>
          <div className='div11'>
            <text className='textcaixa'>Vite</text>
          </div>
        </div>
        <button className='button06'>Download  CV</button>
      </div>
    </div>
  );
}

export default TelaHome;
