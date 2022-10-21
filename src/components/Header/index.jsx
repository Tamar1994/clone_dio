import React from 'react'
import { useNavigate } from "react-router-dom"
import {
    BuscarInputContainer,
    Row,
    Container,
    Input,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture
} from './style';
import {Button} from "../Button";
import logo from "../../assets/logo.jpg";

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }

    const handleGoLogin = () => {
        navigate("/login")
    }

    const handleGoCadastro = () => {
        navigate("/cadastro")
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} width="100px" height="40px" alt ="logo da dio" onClick={handleGoHome} />
                    {autenticado ? (
                          <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar' />
                            </BuscarInputContainer>
                            <Menu href="">Live Code</Menu>
                            <Menu href="">Global</Menu>
                          </>  
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/86428337?v=4" />
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" onclick={handleGoLogin} />
                            <Button title="Cadastrar" onclick={handleGoCadastro} />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }
