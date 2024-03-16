import React, {useState} from "react";
import HeadCon from "../containers/header";
import { SearchCon, Card } from "../component";
import * as Icon from "react-feather";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../containers/loading";
import Parser from 'html-react-parser';

export default function Search({...rest}) {
    const [searchQuery, SetSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [result, SetResult] = useState({});
    const [loading, SetLoading] = useState(false);
    const history = useNavigate();
    const StoryRedirect = (event,id) => {
        event.preventDefault();
        history(`/story/${id}`);
    }

    let curQuery = searchParams.get("q");
    const handleSubmit = (e) => {
        e.preventDefault();
        let search = {
            q: searchQuery
        }
        setSearchParams(search, { replace: true });
        SetLoading(true);

        let params = {};
        let header = {
            'Accept' : '*/*',
            'Content-Type' : 'application/json',
        }
        let qs = '?' + new URLSearchParams(search).toString()
        axios.get(`${process.env.REACT_APP_BACKEND_URI}/search${qs}`, {
            params,
            header
        })
        .then((res) => {
            if (res.data) {
                SetResult(res.data);
                console.log(res.data);
                return res.data;
            }
        })
        .catch((err) => {
            throw err;
        })
        .finally(() => {
            SetLoading(false);
        })
    }


    return (
        <>
                <HeadCon/>
                {curQuery ? <>
                    <SearchCon Justify="flex-start">
                        <SearchCon.TopSearchCon >
                            <SearchCon.SearchForm onSubmit={handleSubmit} Width="40%">
                                <SearchCon.Bar 
                                placeholder="search something.."
                                value={searchQuery}
                                onChange={e => SetSearchQuery(e.target.value)}
                                />
                                {searchQuery && <SearchCon.ButtonContainer>
                                    <SearchCon.SearchButton onClick={() => SetSearchQuery('')} Right="57px">
                                        <Icon.X/>
                                    </SearchCon.SearchButton>
                                    <SearchCon.Line/>
                                </SearchCon.ButtonContainer>}
                                <SearchCon.SearchButton type="submit">
                                <Icon.Search size={23}/>
                                </SearchCon.SearchButton>
                            </SearchCon.SearchForm>
                        </SearchCon.TopSearchCon>
                            {!loading ? <SearchCon.ResultCon>
                                    <SearchCon.TextResult>{`About ${result?.stories ? result.stories.length : "0"} results appear`}</SearchCon.TextResult>
                                    {result && <Card>
                                            <Card.Entities>
                                                {result.stories.map((item) => {
                                                    console.log(item);
                                                    return (
                                                        <Card.Item key={`${item.id}`}>
                                                            <Card.Meta onClick={(e) => StoryRedirect(e,item.id)}>
                                                                <Card.SubTitle>{item.name}</Card.SubTitle>
                                                                <Card.Text>{Parser(item.summary)}</Card.Text>
                                                            </Card.Meta>
                                                        </Card.Item>
                                                    )
                                                })}
                                            </Card.Entities>
                                        </Card>}
                                </SearchCon.ResultCon>
                            : <Loading/>}
                    </SearchCon>
                </>
                : <SearchCon>
                    <SearchCon.SearchTitle>What Are You Looking For?</SearchCon.SearchTitle>
                    <SearchCon.SearchForm onSubmit={handleSubmit}>
                        <SearchCon.Bar 
                        placeholder="search something.."
                        value={searchQuery}
                        onChange={e => SetSearchQuery(e.target.value)}
                        />
                        <SearchCon.SearchButton type="submit">
                            <Icon.Search/>
                        </SearchCon.SearchButton>
                    </SearchCon.SearchForm>
                </SearchCon>}
        </>
    )
}