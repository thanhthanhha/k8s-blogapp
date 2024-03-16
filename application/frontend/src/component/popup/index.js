import React, { useState } from 'react';
import { Container,  Box, Close, Text} from './style/popup';

export default function PopUp ({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
};

PopUp.Box =  function PopUpBox ({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
};

PopUp.Close =  function PopUpClose ({ children, ...restProps }) {
    return (
        <Close {...restProps}>{children}</Close>
    )
};

PopUp.Text =  function PopUpText ({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
};