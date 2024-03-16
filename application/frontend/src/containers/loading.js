import React from 'react';
import { WaitScreen } from '../component';
import * as ROUTES from '../config/router';
import logo from '../loading.gif';


export default function Loading({children,...rest}) {
    return (
        <WaitScreen {...rest}>
            <WaitScreen.LoadingGif src={logo} alt="Loading..."></WaitScreen.LoadingGif>
        </WaitScreen>
    )
}