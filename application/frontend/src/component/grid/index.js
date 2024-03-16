import React from 'react';
import { GridContainer, GridChild, Title, Line } from './style/grid';

export default function Grid({ children, ...restProps }) {
    return <GridContainer {...restProps}>{children}</GridContainer>;
}

Grid.Child = function GridChildCCon({ children, ...restProps }) {
    return <GridChild {...restProps}>{children}</GridChild>;
}

Grid.Title = function GridTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Grid.Line = function GridLine({ children, ...restProps }) {
    return <Line {...restProps}>{children}</Line>;
}