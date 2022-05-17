import React, { useState } from 'react';
import axios from 'axios';


function App(props) {
  const [estado, setEstado] = useState('');
  const [showItToYou, setShowItToYou] = useState([]);
  async function handlePesquisa() {
    const obj = await axios.get(`https://api.github.com/users/${estado}/repos`).catch((error) => {
      if (error.response.status == 404) {
        alert('Usuário não existe!');
        return false;
      }
      console.log(error);
    });
    await setShowItToYou(obj.data);
    console.log(obj);
  }
  return (
    <>
      <p> {estado} </p>
      <input className="usuarioinput" placeholder="Usuário" value={estado} onChange={e => setEstado(e.target.value)} />
      <button type='button' onClick={handlePesquisa}>Pesquisar</button>
      <p> {(!(showItToYou == undefined) && showItToYou.length > 0) ? `Os repositórios do usuário ${estado} são:` : ``} </p>
      <ul style={{ listStyle: "none" }}>
        {(!(showItToYou == undefined)) ? showItToYou.map((rep, id) => (
          <li key={id}>
            {rep.name}
          </li>
        )) : ''}
      </ul>
    </>
  );

}


export default App;
