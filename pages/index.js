import React from 'react';
import Head from "next/head"

import { Jumbotron, Container } from 'reactstrap';

import Rodape from '../components/Rodape'
import Menu from '../components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)



function Home() {
    return (

        <div >
                <Head>
                        <title>Home - grmkt</title>
                        <meta name="description" content="Site de...sobre..."/>
                </Head>
        <Menu />
        
        <Jumbotron fluid className="descr-topo">
        <style>
                {`.descr-topo{
                    background-color: #050c3d;
                    color: #00a1fc;
                    margin-bottom: 0rem !important;
                }`}
         </style>
         <Container className="text-center">
                        <h1 className = "display-4" > Temos a solução que a sua empresa precisa! </h1> 
                <p className="container" > This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention to featured content or information. </p>  
                <p className = "lead">
                        <a className = "mt-4 btn btn-outline-primary btn-lg" href = "/orcamento" role = "button" > Orçamento </a> 
                </p > 
        </Container>
        </Jumbotron>  
        <Jumbotron fluid className="servico">
                <style>
                        {`.servico{
                                background-color: #fff;
                                margin-bottom: 0rem !important;
                        }.circulo{
                                width:140px;
                                height:140px;
                                background-color: #0a1970;
                                font-size: 52px;
                                color: #fff;
                                padding:24px;
                        }.centralizar{
                                margin: 0 auto !important;
                                float: none !important;
                        }`}
                </style>
                <Container className="text-center">
                        <div>
                                <h2 className="display-4">Serviços</h2>
                                <p className="pb-4 lead">com o conteúdo legível de uma página ao examinar seu layout. </p>
                        </div>
                        <div className="row">
                                <div className="col-md-4">
                                        <div className="rounded-circle circulo centralizar">
                                        <FontAwesomeIcon icon="laptop" />
                                                                                </div>
                                        <h2 className="mt-4 mb-4">Serviço um</h2>
                                        <p>This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention</p>
                                </div>
                                <div className="col-md-4">
                                        <div className="rounded-circle circulo centralizar">
                                        <FontAwesomeIcon icon="mobile-alt" />
                                        </div>
                                        <h2 className="mt-4 mb-4">Serviço dois</h2>
                                        <p>This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention</p>

                                </div>
                                <div className="col-md-4">
                                        <div className="rounded-circle circulo centralizar">
                                        <FontAwesomeIcon icon="network-wired" />
                                        </div>
                                        <h2 className="mt-4 mb-4">Serviço tres</h2>
                                        <p>This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention</p>

                                </div>
                        </div>
                </Container>
        </Jumbotron>
<Rodape />
        </div >
    )
}

export default Home;