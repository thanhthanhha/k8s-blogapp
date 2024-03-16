
import React from 'react';
import { Footer } from '../component';
import * as Icon from 'react-feather';


export function FooterContainer({...restProps}) {
    return (<>
    <Footer {...restProps}>
        <Footer.Link href="https://facebook.com"><Icon.Facebook color="#696969" size={20}/><Footer.Tooltip>Facebook</Footer.Tooltip></Footer.Link>
        <Footer.Link href="https://instagram.com"><Icon.Instagram color="#696969" size={20}/><Footer.Tooltip>Instagram</Footer.Tooltip></Footer.Link>
        <Footer.Link href="https://twitter.com"><Icon.Twitter color="#696969" size={20}/><Footer.Tooltip>Twitter</Footer.Tooltip></Footer.Link>
        <Footer.Link href="https://github.com"><Icon.GitHub color="#696969" size={20}/><Footer.Tooltip>Github</Footer.Tooltip></Footer.Link>
    </Footer></>)
}