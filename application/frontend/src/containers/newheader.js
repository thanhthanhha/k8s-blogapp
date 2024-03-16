import React from 'react';
import { Header } from '../component';
import * as ROUTES from '../config/router';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';

export default function HeadCon({children, ButtonOption, ...restProps}) {
    const history = useNavigate()

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
                <Header.Group>
                <Header.Profile>
                    <Header.DropdownGroup>
                        <Header.Textlink>Browse</Header.Textlink>
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.UrlLink to={ROUTES.SIGN_IN}>Sign In</Header.UrlLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.UrlLink to={ROUTES.BROWSE}>Browse</Header.UrlLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.UrlLink to={ROUTES.SIGN_UP}>Sign Up</Header.UrlLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.DropdownGroup>
                    <Header.Textlink onClick={() => {history('/search')}}>Story</Header.Textlink>
                    <Header.Textlink onClick={() => {history('/about')}}>About</Header.Textlink>
                    <Header.Textlink onClick={() => {history('/contact')}}>Contact Us</Header.Textlink>
                </Header.Profile>
                </Header.Group>
                {ButtonOption ? <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Header.ButtonLink> : <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>}
            </Header.Frame>
            {children}
        </Header>
    )
}