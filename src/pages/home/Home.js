import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button, List, InputGroup, FormFeedback, FormGroup } from 'reactstrap';
import Style from './Home.module.css';
import logo from '../../assets/logo.png';

export default function Home(props) {
    const history = useNavigate();
    const [user, setuser] = useState('');
    const [err, setErr] = useState(false);
    // Var para mostrar repositorios na tela
    // const [showItToYou, setShowItToYou] = useState([]);
    function handlePesquisa() {
        setErr(false);
        axios.get(`https://api.github.com/users/${user}/repos`).then((res) => {
            const obj = res;
            // Atualizava repositório na tela
            // setShowItToYou(obj.data);
            console.log(obj.data);

            const jsonArchive = [];
            obj.data.map((response) => {
                jsonArchive.push(response.name);
            });

            localStorage.setItem('repositoriesName', JSON.stringify(jsonArchive));
            localStorage.setItem('user', user);
            history('/repositories');
        }).catch((error) => {
            setErr(true);
            console.log(error);
        });
    }

    return (
        <>  
            <img className={Style.classImgHome} src={logo} alt='githublogo'/>
            <h1 className={Style.classH1Home}>Consulta repositórios do usuário git!</h1>
            <h3 className={Style.classH3Home}> Usuário: {user} </h3>

            {/* Versão professor: */}
            <FormGroup>
                <InputGroup className={Style.classInputHome} >
                    <Input placeholder="Usuário" value={user} onClick={() => err ? setErr(false) : ''} onChange={e => setuser(e.target.value)}
                        className={`${Style.classInputLabel} ${err ? 'is-invalid form-control' : ''}`} />
                    <Button className={Style.classButtonHome} onClick={handlePesquisa} color='dark'>Pesquisar</Button>
                </InputGroup>
                {err ? <FormFeedback className={Style.classErrorMessage}> Usuário não existe!!!
                </FormFeedback> : ''}
            </FormGroup>

            {/* Versão Hamilton */}
            {/* <Input className={Style.classInputHome} placeholder="Usuário" value={user} onChange={e => setuser(e.target.value)} />
            <Button className={Style.classButtonHome} onClick={handlePesquisa}>Pesquisar</Button> */}


            {/* Mostra os repositórios na tela */}
            {/* <p className={Style.classListHome}>
                {(!(showItToYou === undefined) && showItToYou.length > 0) ? `Os repositórios do usuário ${user} são:` : ``}
            </p>

            <List type='unstyled' className={Style.classListHome} >
                {
                    showItToYou ?
                        showItToYou.map((rep, id) => (
                            <li key={id}>
                                {rep.name}
                            </li>))
                        : ''
                }
            </List> */}
        </>
    );
}

