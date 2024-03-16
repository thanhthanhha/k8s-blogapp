import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {Logo, Background, Link, Container, Icon, Group, Profile, Dropdown, Textlink, ButtonLink, Account, User, UserImg, DropdownGroup, TextAccLink } from './style/header'


export default function Header({bg = true, dontShowOnSmallViewPort = false, children, ...restProps}) {
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Header.Icon = function HeaderIcon({to , ...restProps}) {
    return (
            <ReachRouterLink to={to}>
                <Icon {...restProps}/>
            </ReachRouterLink>
        );
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
    <Link to={to}>
        <Logo {...restProps}/>
    </Link>
    );
}


Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}> {children} </Group>
}



Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}> {children} </Profile>
}

Header.Account = function HeaderAccount({children, ...restProps}) {
    return <Account {...restProps}> {children} </Account>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}> {children} </Dropdown>
}

Header.Textlink = function HeaderTextlink({children, ...restProps}) {
    return <Textlink {...restProps}> {children} </Textlink>
}

Header.UrlLink = function HeaderLink({children, ...restProps}) {
    return (
    <Link {...restProps}>  {children}</Link>
    )
}
Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.User = function HeaderUser({children, ...restProps}) {
    return <User {...restProps}>{children}</User>
}

Header.UserImg = function HeaderUserImg({children, ...restProps}) {
    return <UserImg {...restProps}>{children}</UserImg>
}

Header.DropdownGroup = function HeaderDropdownGroup({children, ...restProps}) {
    return <DropdownGroup {...restProps}>{children}</DropdownGroup>
}

Header.TextAccLink = function HeaderTextAccLink({children, ...restProps}) {
    return <TextAccLink {...restProps}>{children}</TextAccLink>
}