import React from "react";
import { HeaderContainer } from "../containers/header";
import HeadCon from "../containers/newheader";
import { WaitScreen } from "../component";

export default function Unauthorized() {
    return (
        <>
                <HeadCon/>
                <WaitScreen Height="300px">
                    <WaitScreen.Bigtext>Unauthorized</WaitScreen.Bigtext>
                </WaitScreen>
        </>
    )
}