import React from "react";
import HeadCon from "../containers/newheader";
import HomeCom from "../component/home";
import { FooterContainer } from "../containers/footer";
import * as Icon from 'react-feather';

export default function Home({isLogin,...rest}) {
    console.log(`home ${isLogin}`);
    const user = [
        {
            name: 'Felix Kjellberg',
            img: process.env.PUBLIC_URL + '/images/user1.png',
            link: 'https://en.wikipedia.org/wiki/PewDiePie'
        },
        {
            name: 'Louis Partridge',
            img: process.env.PUBLIC_URL + '/images/user3.png',
            link: 'https://en.wikipedia.org/wiki/Louis_Partridge#:~:text=Louis%20Partridge%20(born%203%20June,Water%20and%20About%20a%20Dog.'
        },
        {
            name: 'Cate Blanchett',
            img: process.env.PUBLIC_URL + '/images/user2.png',
            link: 'https://en.wikipedia.org/wiki/Cate_Blanchett'
        }
    ]

    return (
        <>
                <HeadCon/>
                <HomeCom>
                    <HomeCom.Title>{`A Safe Place\nFor Fanfiction Writer`}</HomeCom.Title>
                    <HomeCom.TextBlock>AO3, also known as Archive of Our Own, is a non-profit, fan-created archive for fan fiction, fan vids, and other fanworks. It is run by the Organization for Transformative Works (OTW) and was created in 2008 to provide a space for fanworks that may not be accepted on other platforms. It allows users to upload, share, and read fan fiction, fan art, and other fan-created content in a wide variety of fandoms. It has a large and active community of users and is considered one of the most popular fan fiction archives on the internet.</HomeCom.TextBlock>
                    <HomeCom.PicCon>
                        <HomeCom.PicLeft src={process.env.PUBLIC_URL + '/images/pic1.png'}></HomeCom.PicLeft>
                        <HomeCom.PicRight src={process.env.PUBLIC_URL + '/images/pic2.jpg'}></HomeCom.PicRight>
                    </HomeCom.PicCon>
                    <HomeCom.Title>Our Sponsors</HomeCom.Title>
                    <HomeCom.ProfileContainer>
                        {user.map((u) =>{
                            return <HomeCom.Profile>
                                <HomeCom.Link href={u.link}>{`\n${u.name}`}</HomeCom.Link>
                                <HomeCom.Image src={u.img}/>
                            </HomeCom.Profile>
                        })}
                    </HomeCom.ProfileContainer>
                    <HomeCom.TextBlock Margin="0 0 60px 0">{`Ao3 is a fan fiction website that uses sponsors to financially support its operations and improvements. Some notable sponsors include Felix Kjellberg, Louis Partridge and Cate Blanchett. Kjellberg, known as PewDiePie, believes fan fiction to be a valuable form of creative expression and his sponsorship brings attention to its importance. Louis Partridge is a vocal supporter of fan fiction and its communities, and his sponsorship helps raise awareness of its positive impact. Cate Blanchett supports fan fiction and its communities and her sponsorship helps keep the website running and raises awareness of its positive impact. These sponsors, along with many others, help keep Ao3 running and promote the value of fan fiction, allowing creators to continue sharing their work and building communities, and allowing readers to continue finding new stories.`}</HomeCom.TextBlock>
                </HomeCom>
                <FooterContainer/>
        </>
    )
}