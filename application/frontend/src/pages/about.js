import React from "react";
import HeadCon from "../containers/newheader";
import HeadConAuth from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { HomCon } from "../component";


export default function About() {
    const token = localStorage.getItem('token');
    return (
        <>
            {token ? <HeadConAuth/> : <HeadCon/>}
            <HomCon>
                <HomCon.Title>
                About AO3
                </HomCon.Title>
                <HomCon.TextBlock Margin="30px 0 90px 0">AO3, also known as Archive of Our Own, is a fan fiction website that allows users to create and share their own stories. The website is run by a team of volunteers and is supported by sponsors, who help to keep the website running and improving. The website has a wide variety of stories, including fan fiction for books, movies, TV shows and more. AO3 is a platform for creators to share their work and build communities, and for readers to discover new stories and connect with other fans.</HomCon.TextBlock>
                <HomCon.Title>
                    History Of AO3
                </HomCon.Title>
                <HomCon.TextBlock Margin="30px 0 110px 0">
                AO3, or Archive of Our Own, is a fan fiction website that was first established in 2009 by a group of fans who wanted to create a platform for fan fiction that was more inclusive and accessible than other existing websites. The website was built and run by a team of volunteers, and it quickly gained popularity among fan fiction enthusiasts.

One of the key features of AO3 is its use of tagging and filtering, which allows readers to easily find stories based on their interests. The website also has a strong focus on inclusivity and diversity, with a wide range of content and representation of different identities and communities.

Throughout its history, AO3 has faced several challenges, including legal threats and technical difficulties. However, the website has continued to evolve and improve, with new features and updates being added regularly. In 2020, the website was able to become financially stable thanks to the support of sponsors, including YouTuber and Twitch streamer Felix Kjellberg, also known as PewDiePie, and actor Louis Partridge.

Today, AO3 is one of the most popular fan fiction websites, with over 6 million registered users and over 6 million works. It continues to be a platform for creators to share their work and build communities, and for readers to discover new stories and connect with other fans.
                </HomCon.TextBlock>
            </HomCon>
            
            <HomCon.Background>
                <FooterContainer Transform="translateY(425px)"/>
            </HomCon.Background>
        </>
    )
}