import React, {useState} from "react";
import HeadCon from "../containers/header";
import { useParams, useNavigate } from 'react-router-dom';
import useContent from '../hook/use-content';
import { Story } from "../component";
import Parser from 'html-react-parser';
import * as ROUTES from '../config/router';

export default function StoryPage(children,...rest) {

    const {storyid,chapterid} = useParams();
    const [valclick,SetClick] = useState(false);
    const [selectedchapter,SetChapter] = useState((chapterid - 1) || 0);
    const history = useNavigate();
    console.log(valclick);

    const content = useContent(`story/${storyid}`);
    let chapter = content?.name ? content.chapters[(chapterid - 1) || 0] : null;
    

    return (
        <>
                <HeadCon/>
                {content?.name ? <Story>
                    <Story.HeaderCon>
                        <Story.ButtonContainer>
                            <Story.PageButton onClick={() => SetClick(!valclick)}>Chapter Index</Story.PageButton>
                        </Story.ButtonContainer>
                        <Story.ButtonContainer>
                            <Story.Dropdown useclick={valclick}>
                                <Story.Select onChange={(e) => {
                                    console.log(e.target.value);
                                    SetChapter(e.target.value);
                                }}
                                defaultValue={(chapterid + 1) || 0}>
                                    {content.chapters.map((chapternum) => {
                                        return (<Story.Option value={chapternum.num}>
                                                    {chapternum.content.title}
                                        </Story.Option>)
                                    })}
                                </Story.Select>
                                <Story.PageButton onClick={() => history(`${ROUTES.STORY}/${storyid}${ROUTES.CHAPTER}/${selectedchapter}`)}>Go to</Story.PageButton>
                            </Story.Dropdown>
                        </Story.ButtonContainer>
                    </Story.HeaderCon>
                    <Story.Meta>
                        <Story.Title>{content.name}</Story.Title>
                        <Story.Link to={`${ROUTES.PROFILE}/${content.user.username}`}>{content.user.username}</Story.Link>
                        <Story.BorderCon>
                            <Story.Text>{Parser(content.summary)}</Story.Text>
                        </Story.BorderCon>
                    </Story.Meta>
                    <Story.ChapterHeader>{chapter.content.title}</Story.ChapterHeader>
                    <Story.Text>{Parser(chapter.content.content)}</Story.Text>
                    <Story.ButtonContainer>
                        {content.chapters[chapterid] && 
                        <Story.PageButton to={`${ROUTES.STORY}/${storyid}/${ROUTES.CHAPTER}/${chapterid + 1}`}>Next Chapter</Story.PageButton>}
                    </Story.ButtonContainer>
                </Story> : null}
        </>
    )
}