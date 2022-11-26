import React from "react";
import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import {links, socials} from '../utils/constants'
// import { HashLink } from 'react-router-hash-link';
const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        // eslint-disable-next-line
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }

            window.addEventListener('scroll', onScroll)

            return () => window.removeEventListener('scroll', onScroll)
        }
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {
                        links.map((link)=>{
                            return <Nav.Link key={link.id} href={link.url} className={activeLink === link.text ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink(link.text)}>{link.text}</Nav.Link>
                        })
                    }
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        {
                            socials.map((social)=>{
                                return <a key={social.id} href={social.url}><img src={social.img} alt={social.name}/></a>
                            })
                        }
                    </div>
                    {/* <HashLink to='#connect'>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </HashLink> */}
                    <button className="vvd"><span>Let’s Connect</span></button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;