import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ estado , setEstado ] = useState('');
  const [ showItToYou , setShowItToYou ] =useState('');
  
  async function handlePesquisa(){
    setShowItToYou(`Os projetos do usuário ${estado} são: \n`);
    const obj = await axios.get(`https://api.github.com/users/${estado}/repos`);

    for(let i = 0; i < obj.data.length; i++){
      setShowItToYou(showItToYou => showItToYou+`O projeto número ${i+1} é o ${obj.data[i].name} \n`);
    }

    console.log(showItToYou);

  }
  return (
    <>
      <p> {estado} </p>
      <input className="usuarioinput" placeholder="Usuário" value= {estado} onChange={e => setEstado(e.target.value)} />
      <button type='button' onClick={handlePesquisa}>Pesquisar</button>
      <p id="fds"> {showItToYou} </p>
    </>
  );
 
}


export default App;
