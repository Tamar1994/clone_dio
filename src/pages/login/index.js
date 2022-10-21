import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"


 import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

 const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();


const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });


    const onSubmit = async formData => {
        try{

            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate("/feed")
            }else{
                alert("Usuário não localizado");
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    }


    return(
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errortext={errors?.email?.message} control={control} placeholder="E-mail" lefticon={<MdEmail />} />
                        <Input name="password" errortext={errors?.password?.message} control={control} placeholder="Senha" lefticon={<MdLock />} type="password"/>
                        <Button title="Entrar" variant="Secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText href="/cadastro">Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>

    )


};

export { Login };