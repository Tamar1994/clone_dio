import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"


 import { Column, Container, TextoLogin, SubtitleJaPossuo, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

 const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();


const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });


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
                    <TitleLogin>Começe agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input name="nome" errortext={errors?.email?.message} control={control} placeholder="Nome" lefticon={<MdAccountCircle />} />
                        <Input name="email" errortext={errors?.email?.message} control={control} placeholder="E-mail" lefticon={<MdEmail />} />
                        <Input name="password" errortext={errors?.password?.message} control={control} placeholder="Senha" lefticon={<MdLock />} type="password"/>
                        <Button title="Criar minha conta" variant="Secondary" type="submit"/>
                    </form>
                    <Column>
                        <SubtitleJaPossuo>Ao clicar em "Criar minha conta" declaro que aceito as
                            Politicas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleJaPossuo>
                        <TextoLogin>Já possui conta? <a href="/login">Faça login.</a></TextoLogin>
                    </Column>
                </Wrapper>
            </Column>
        </Container>
        </>

    )


};

export { Cadastro };