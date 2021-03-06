import Head from "next/head"
import Menu from '../components/Menu'
import Rodape from "../components/Rodape"
import {Container, Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap'

function Orcamento() {
    return ( 
        <div> 
            <head>
                <title>Orçamento - grmkt</title>
                <meta name="description" content="Solicitar orçamento de..."/>
            </head>

            < Menu / >
            <Jumbotron fluid className="descr-topo">
            <style>
                {`.descr-topo{
                    background-color: #050c3d;
                    color: #00a1fc;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    margin-bottom: 0rem !important;
                }`}
         </style>
         <Container className="display-4 text-center">
             <h1>Orçamento</h1>
         </Container>
            </Jumbotron>
            <Jumbotron className="fluid form-orcamento">
                <style>
                    {`.form-orcamento{
                        padding-top:80px;
                        padding-bottom:80px;
                        background-color:#fff;
                        margin-bottom;0rem !important;

                    }`}
                </style>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="namne">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="nome" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Preencha com o seu melhor email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="fone">Telefone</Label>
                            <Input type="text" name="fone" id="fone" placeholder="(XX) XXXX XXXX" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="whatsapp">Whatsapp</Label>
                            <Input type="text" name="whatsapp" id="whatsapp" placeholder="(XX)XXXXX XXXX" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projeto">projeto</Label>
                            <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco sobre o seu projeto." />
                        </FormGroup>
                        <Button type="submit" outline color="primary">Solicitar</Button>
                    </Form>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    );
}  

export default Orcamento;
