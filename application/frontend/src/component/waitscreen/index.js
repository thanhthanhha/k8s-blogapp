import React, { useState } from 'react';

import { Container, Bigtext, LoadingGif } from './style/waitscreen';

export default function WaitScreen({children,...rest}) {
    return (<Container {...rest}>{children}</Container>)
}

WaitScreen.Bigtext = function WaitFunc({children,...rest}) {
    return (<Bigtext {...rest}>{children}</Bigtext>)
}

WaitScreen.LoadingGif = function Loadgif({children,...rest}) {
    return (<LoadingGif {...rest}>{children}</LoadingGif>)
}