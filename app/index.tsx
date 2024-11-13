import { useState } from 'react';

export default function Cadastro() {
  return (
    <div  style={{
      backgroundColor: '#172F3B',
      color:'#DFE2E7',
      display: 'flex',
      flexDirection: 'column',
      }}>

      <div style={{
      marginTop:'130px',
      backgroundColor: '#1A222A',
      color:'#DFE2E7',
      display: 'flex',
      flexDirection: 'column',
      height: '740px',
      borderTopWidth: 2,
      borderTopColor: 'trasparent',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40, 
      
    }}>
      <p style={{
      fontSize: '26px',
      fontWeight: 'bold',
      margin:'22px',
      display: 'flex',
      
    }}>
        Para acessar o histórico é necessário possuir um cadastro. <br /> Por favor, crie sua conta:
      </p>

      <h1 style={{
      fontSize: '32px',
      fontWeight: 'bold',
      margin:'22px',
      display: 'flex',
      
    }}
    >Cadastre-se</h1>

      <form style={{
      margin:'0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      gap: '24px'
      
    }} >
          <input style={{
            width:'362px',
            height:'60px',
            background:'rgba(94, 109, 125, 0.1)',
            fontSize:'24px',
            paddingLeft:'19px',
            border: '2px solid #1C7396',
            borderRadius:'50px',
      
    }} type="text" name="nome" placeholder='Nome de usário:' />
        
          <input  style={{
            width:'362px',
            height:'60px',
            background:'rgba(94, 109, 125, 0.1)',
            fontSize:'24px',
            paddingLeft:'19px',
            border: '2px solid #1C7396',
            borderRadius:'50px',
      
    }} type="email" name="email" placeholder='Email'/>

          <input  style={{
            width:'362px',
            height:'60px',
            background:'rgba(94, 109, 125, 0.1)',
            fontSize:'24px',
            paddingLeft:'19px',
            border: '2px solid #1C7396',
            borderRadius:'50px',
      
    }} type="password" name="senha" placeholder='Senha:' />

        <button
         style={{
          width:'190px',
          height:'50px',
          background: '#1C7396',
          color: '#DFE2E7',
          fontSize: '28px',
          border: 'none',
          borderRadius:'50px',
  }}
   type="submit">Criar Conta</button>

        <button
        style={{
          width:'316px',
          height:'50px',
          background: '#1C7396',
          color: '#DFE2E7',
          fontSize: '28px',
          border: 'none',
          borderRadius:'50px',
  }}
   type="button">
          <img src="" alt="" /> Entrar com Google
        </button>
      </form>
    </div>
    </div>
  );
}
