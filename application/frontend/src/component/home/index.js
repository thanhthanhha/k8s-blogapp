import React, { useState } from 'react';
import {Container, PicCon, PicLeft, PicRight, TextBlock, Title, ProfileContainer, Profile, Image, Link, Background} from "./style/home";

export default function HomeCom({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

HomeCom.PicCon = function HomePicCon({children, ...restProps}) {
    return <PicCon {...restProps}> {children} </PicCon>
}

HomeCom.PicLeft = function HomePicLeft({children, ...restProps}) {
    return <PicLeft {...restProps}/>
}

HomeCom.PicRight = function HomePicRight({children, ...restProps}) {
    return <PicRight {...restProps}/>
}

HomeCom.Title = function HomeTitle({children, ...restProps}) {
    return <Title {...restProps}>{children} </Title>
}

HomeCom.TextBlock = function HomeTextBlock({children, ...restProps}) {
    return <TextBlock {...restProps}>{children} </TextBlock>
}

HomeCom.ProfileContainer = function HomeProfileContainer({children, ...restProps}) {
    return <ProfileContainer {...restProps}>{children} </ProfileContainer>
}

HomeCom.Profile = function HomeProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children} </Profile>
}

HomeCom.Image = function HomeImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}

HomeCom.Link = function HomeLink({children, ...restProps}) {
    return <Link {...restProps}>{children} </Link>
}

HomeCom.Background = function HomeBackground({children, ...restProps}) {
    return <Background {...restProps}>{children} </Background>
}