import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {

    return(
        <>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOPS DA SEMANA</TitleHighlight>
            <UserInfo nome="Adriano Rodrigues" percentual="70" 
            image="https://avatars.githubusercontent.com/u/86428337?v=4"/>
            <UserInfo nome="Adriano Rodrigues" percentual="60" 
            image="https://avatars.githubusercontent.com/u/86428337?v=4"/>
            <UserInfo nome="Adriano Rodrigues" percentual="50" 
            image="https://avatars.githubusercontent.com/u/86428337?v=4"/>
            <UserInfo nome="Adriano Rodrigues" percentual="50" 
            image="https://avatars.githubusercontent.com/u/86428337?v=4"/>
            <UserInfo nome="Adriano Rodrigues" percentual="50" 
            image="https://avatars.githubusercontent.com/u/86428337?v=4"/>
            
            </Column>
        
        </Container>
         
        </>

    )


};

export { Feed };