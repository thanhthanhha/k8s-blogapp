import React from "react";
import HeadCon from "../containers/newheader";
import HeadConAuth from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Grid, HomCon } from "../component";
import { GridChild } from "../component/grid/style/grid";
import * as Icon from "react-feather";
import { Background } from "../component/header/style/header";

export default function Contact({...restProps}) {
    const token = localStorage.getItem('token');
    return (
        <>
            {token ? <HeadConAuth/> : <HeadCon/>}
            <HomCon>
                <HomCon.Title>Contact Us</HomCon.Title>
                <HomCon.TextBlock>{`At AO3, we value the feedback and input of our users. We strive to provide the best experience for our readers and creators, and your thoughts and suggestions play a big role in helping us achieve that goal. If you have any questions, comments, or concerns, please don't hesitate to reach out to us.

    You can contact us through the following ways:`}</HomCon.TextBlock>
            </HomCon>

            <Grid>
                <Grid.Child BackGround={`${process.env.PUBLIC_URL}/images/map.jpg`} Padding="0">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.009931324849!2d-73.9823235!3d40.7730147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1603657174497!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </Grid.Child>
                <Grid.Child>
                    <Grid.Title>Meet Us</Grid.Title>
                    <Grid.Line><Icon.Phone size={13}/>{`  0009887902`}</Grid.Line>
                    <Grid.Line><Icon.Mail size={13}/>{`  support@ao3.com`}</Grid.Line>
                    <Grid.Line><Icon.Map size={13}/>{`  5th Avenue New York city`}</Grid.Line>
                </Grid.Child>
                <Grid.Child>
                    <Grid.Title>Pitch Us</Grid.Title>
                    <Grid.Line>Hello</Grid.Line>
                    <Grid.Line>{`may name is `}<span style={{color:"blue"}}>your name</span> {`and my `}<span style={{color:"blue"}}>e-mail address</span>{` is your email and I would like to discuss about `}<span style={{color:"blue"}}>this project</span></Grid.Line>
                </Grid.Child>
            </Grid>
            <FooterContainer/>
        </>
    )
}