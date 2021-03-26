import React from 'react';
import Head from "next/head";
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container } from 'reactstrap';



function Home() {
    return (
        <div>
            
        <Head>
                <title>Home - grmkt</title>
                <meta name="description" content="Site de...sobre..."/>
        </Head>
        <Menu />
        <Container className=" corpo ">
        <style>
                {`.corpo{
                    margin-top: 20px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`}
         </style>
       
         <Jumbotron>
                        <h1 className = "display-4" > Landing Page em construção! </h1> 
                <p className="container" > This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention to featured content or information. </p> 
                        <hr className="my-4" />
                <p> It uses utility classes for typography and spacing to space content out within the larger container.</p> 
                <p className = "lead" >
                        <a className = "btn btn-primary btn-lg" href = "#" role = "button" > Leia mais... </a> 
        </p > 
        </Jumbotron>   
        <Jumbotron>
                        <h1 className = "display-4" > Landing Page em construção! </h1> 
                <p className="container" > This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention to featured content or information. </p> 
                        <hr className="my-4" / >
                <p> It uses utility classes for typography and spacing to space content out within the larger container.</p> 
                <p className = "lead" >
                        <a className = "btn btn-primary btn-lg" href = "#" role = "button" > Leia mais... </a> 
        </p > 
        </Jumbotron>  
        </Container>

        
       
                <Rodape />
       </div>
    )
}

export default Home;