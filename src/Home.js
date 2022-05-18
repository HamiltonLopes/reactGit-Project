import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, List, InputGroup } from 'reactstrap';
import Style from './Home.module.css';


function Home(props) {
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
        setShowItToYou(obj.data);
        console.log(obj);
    }

    return (
        <>
            <h1 className={Style.classH1Home}> user: {estado} </h1>

            {/* Versão professor: */}
            <InputGroup className={Style.classInputHome}>
                <Input  placeholder="Usuário" value={estado} onChange={e => setEstado(e.target.value)} />
                <Button onClick={handlePesquisa}>Pesquisar</Button>
            </InputGroup>


            {/* Versão Hamilton */}
            {/* <Input className={Style.classInputHome} placeholder="Usuário" value={estado} onChange={e => setEstado(e.target.value)} />

            <Button className={Style.classButtonHome} onClick={handlePesquisa}>Pesquisar</Button> */}

            <p className={Style.classListHome}>
                {(!(showItToYou == undefined) && showItToYou.length > 0) ? `Os repositórios do usuário ${estado} são:` : ``}
            </p>

            <List type='unstyled' className={Style.classListHome} >
                {
                    (!(showItToYou == undefined)) ?
                        showItToYou.map((rep, id) => (
                            <li key={id}>
                                {rep.name}
                            </li>))
                        : ''
                }
            </List>

        </>
    );

}


export default Home;
