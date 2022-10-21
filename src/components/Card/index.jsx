import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from "./style"
import { FiThumbsUp } from "react-icons/fi"

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://phixies.com/publico/tecnologias-galeria/48/!0339c8e835cdcbe2b14071d34d069056ba93046f4f7e74f5db75fb475d911b33.png" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/86428337?v=4" />
                    <div>
                        <h4>Adriano Rodrigues</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de ReactJs</h4>
                    <p>Projeto feito para o curso de React.Js pela Digital Innovation One...
                        <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript #ReactJS</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
