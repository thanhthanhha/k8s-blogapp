import React from "react";
import { Container, Column, ProfileUser , Text, ImageCrop, Image } from "./styles/profile";

export default function Profile({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Profile.Column = function ProfileColumn({children, ...restProps}) {
    return (
        <Column {...restProps}>{children}</Column>
    )
}

Profile.ProfileUser = function ProfileProfile({children, ...restProps}) {
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Profile.Text = function ProfileText({children, ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Profile.ImageCrop = function ProfileImageCrop({children, ...restProps}) {
    return (
        <ImageCrop {...restProps}>{children}</ImageCrop>
    )
}

Profile.Image = function ProfileImage({children, ...restProps}) {
    return (
        <Image {...restProps}>{children}</Image>
    )
}
