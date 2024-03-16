import React, { useState, useEffect, useContext } from 'react';
import { Card, HomCon } from '../component';
import useContent from '../hook/use-content';
import * as ROUTES from '../config/router';
import Parser from 'html-react-parser';
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../containers/loading";
import { FooterContainer } from "../containers/footer";

export default function BrowseContainer({children, ...restProps}) {
    
    const location = useLocation();
    const history = useNavigate();
    const content = useContent('storylist');
    const StoryRedirect = (event,id) => {
        event.preventDefault();
        history(`/story/${id}`);
    }

    return (
        <>
        {content.length > 0 ? <>
        <Card.Background>
        <Card.Group>
            <HomCon.Title FontSize="27px" Align="flex-start" Margin="20px 0 50px 150px">New Stories</HomCon.Title>
            <Card>
                <Card.Entities>
                    {content.map((slideItem) => {
                        return (<Card.Item key={`${slideItem.id}`}>
                                    <Card.Meta onClick={(e) => StoryRedirect(e,slideItem.id)}>
                                        <Card.SubTitle>{slideItem.name}</Card.SubTitle>
                                        <Card.Text>{Parser(slideItem.summary)}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                                )
                    })}
                </Card.Entities>
            </Card>
        </Card.Group>
        </Card.Background>
        <FooterContainer/>
        </> : <Loading Height="100px" Margin="0px"/>}
        </>
    )
}
