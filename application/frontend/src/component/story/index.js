import React from "react";
import { Container, 
    Title, Link, Text, BorderCon, Meta, ChapterHeader, 
    ButtonContainer, PageButton, Select, Option, HeaderCon, Group, Dropdown } from "./styles/story";

export default function Story({children,...rest}) {
    return (
        <Container {...rest}>{children}</Container>
    )
}

Story.Title = function StoryTitle({children,...rest}) {
    return (
        <Title {...rest}>{children}</Title>
    )
}

Story.Link = function StoryLink({children,...rest}) {
    return (
        <Link {...rest}>{children}</Link>
    )
}

Story.Text = function StoryText({children,...rest}) {
    return (
        <Text {...rest}>{children}</Text>
    )
}

Story.BorderCon = function StoryBorderCon({children,...rest}) {
    return (
        <BorderCon {...rest}>{children}</BorderCon>
    )
}

Story.Meta = function StoryMeta({children,...rest}) {
    return (
        <Meta {...rest}>{children}</Meta>
    )
}

Story.ChapterHeader = function ChapterHeaderFunc({children,...rest}) {
    return (
        <ChapterHeader {...rest}>{children}</ChapterHeader>
    )
}

Story.ButtonContainer = function ButtonContainerFunc({children,...rest}) {
    return (
        <ButtonContainer {...rest}>{children}</ButtonContainer>
    )
}

Story.PageButton = function PageButtonFunc({children,...rest}) {
    return (
        <PageButton {...rest}>{children}</PageButton>
    )
}

Story.Select = function SelectFunc({children,...rest}) {
    return (
        <Select {...rest}>{children}</Select>
    )
}

Story.Option = function OptionFunc({children,...rest}) {
    return (
        <Option {...rest}>{children}</Option>
    )
}

Story.HeaderCon = function HeaderConFunc({children,...rest}) {
    return (
        <HeaderCon {...rest}>{children}</HeaderCon>
    )
}

Story.Group = function GroupFunc({children,...rest}) {
    return (
        <Group {...rest}>{children}</Group>
    )
}

Story.Dropdown = function DropdownFunc({children,...rest}) {
    return (
        <Dropdown {...rest}>{children}</Dropdown>
    )
}