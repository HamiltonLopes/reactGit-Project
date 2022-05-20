import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import Style from './Repositories.module.css';
import logo from '../../assets/logo2.png';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const [user, setUser] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        setUser(localStorage.getItem('user'));
        let repositoriesName = localStorage.getItem('repositoriesName');

        if (repositoriesName) {
            repositoriesName = JSON.parse(repositoriesName);
            console.log(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            nav('/');
        }

    }, [nav]);

    return (
        <div className={Style.wrapperRep}>
            <div className={Style.classDivTitRep}>
                <img className={Style.classImgRep} src={logo} alt='logoversaomenorgit'/>
                <h1 className={Style.classH1Rep}>Repositórios do usuário: {user}</h1>
            </div>
            <ListGroup flush={true}>
                {
                    repositories.map((res, id) => {
                        return <ListGroupItem key={id} color='dark'> Repositório: {res} </ListGroupItem>;
                    })
                }
            </ListGroup>
            <Button className={` ${Style.classButtonRep}`} color='dark'>
                <Link className={Style.classLinkRep} to='/'> voltar </Link>
            </Button>
        </div>
    );
}