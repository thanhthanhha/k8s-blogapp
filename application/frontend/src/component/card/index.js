import React, { useState, useContext, createContext } from 'react';

import { Container, Title, Group, Entities, SubTitle, Text, Meta, Item, Background } from './styles/card';

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
  
  Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };
  
  Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  
  Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
  };
  
  Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
  };

  Card.Item = function CardItem({ item, children, ...restProps }) {
    return (
        <Item {...restProps}>{children}</Item>
    )
  };

  Card.Background = function CardBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
  };

  