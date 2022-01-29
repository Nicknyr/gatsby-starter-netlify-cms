import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Navbar = styled.nav`
    height: 3.5rem;
    min-width: 100%;
    background: transparent;
    {/*border-bottom: 1px solid #20FC8F;*/}
    display: flex;
    justify-content: end;
`

const Hamburger = styled.div`
    height: 3.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Popup = styled.div`
    height: 100vh;
    min-width: 100%;
    z-index: 100;
    background: #181818;
    position: fixed;
`

const XContainer = styled.div`
    height: 3.5rem;
    min-width: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const X = styled.div`
    height: 3.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100%;
`

const UL = styled.ul`
    list-style-type: none;
    margin-top: 5rem;
    padding: 1rem;
`

const LI = styled.li`
    font-size: 3rem;
    margin-bottom: 1rem;
`

function NewNavbar() {
    const [visible, setVisible] = useState(false);

    console.log('visible : ' + visible);

    return (
        <div>
            <Navbar>
                <Hamburger>
                    <FontAwesomeIcon icon={faBars} size="2x" style={{color: "#20FC8F"}} onClick={() => setVisible(!visible)}/>
                </Hamburger>
                { visible ?
                    <Popup>
                        <XContainer>
                            <X>
                                <FontAwesomeIcon icon={faX} size="2x" style={{color: "#20FC8F"}} onClick={() => setVisible(!visible)}/>
                            </X>
                        </XContainer>
                        <NavLinksContainer>
                            <UL>
                                <LI>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </LI>
                                <LI>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </LI>
                                <LI>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </LI>
                                <LI>
                                    <Link to="/contact/examples">
                                        Form Examples
                                    </Link>
                                </LI>
                            </UL>
                        </NavLinksContainer>
                    </Popup>
                    : null
                }
            </Navbar>
        </div>
    );

}

export default NewNavbar;