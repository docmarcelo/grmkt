import React, { useState } from 'react';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return ( 
        <div>
                <style > { `.menu-custom{
                            background-color: #041370;
                        }.menu-espace{
                            margin-right:4px;
                        }` } 
                </style> 
            <Navbar className = "menu-custom" dark expand = "md" >
                <Container>
                    <NavbarBrand href = "/" > Grmkt </ NavbarBrand> 
                    <NavbarToggler onClick = { toggle }/> 
                    <Collapse isOpen = { isOpen }navbar >
                        <Nav className = "mr-auto"navbar >
                            <NavItem className="mr-4">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            </NavItem> 
                            <NavItem className="ml-4">
                            <Link href="/landing">
                                <a>LandPage</a>
                            </Link>
                            </NavItem> 
                            <NavItem className="ml-4">
                            <Link href="/orcamento">
                                <a>Orçamento</a>
                            </Link>
                            </NavItem> 
                            <NavItem className="ml-4">
                            <Link href="/contato">
                                <a>Contato</a>
                            </Link>
                            </NavItem> 
                            <NavItem className="ml-4">
                            <Link href="/hovepage">
                                <a>Hover</a>
                            </Link>
                            </NavItem> 
                        </Nav> 
                    </Collapse> 
                </Container> 
            </Navbar> 
        </div>
    );
}

export default Menu;