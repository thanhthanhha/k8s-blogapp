import React from "react";
import { SearchBar, SearchContainer, SearchButton, SearchTitle, SearchForm, Line, TopSearchCon, ButtonContainer, ResultCon, TextResult } from "./style/search";

export default function SearchCon({ children, ...restProps }) {
    return (<SearchContainer {...restProps}>{children}</SearchContainer>)
}

SearchCon.Bar = function SearchConBar({ children, ...restProps }) {
    return (<SearchBar {...restProps}>{children}</SearchBar>)
}

SearchCon.SearchButton = function SearchConSearchButton({ children, ...restProps }) {
    return (<SearchButton {...restProps}>{children}</SearchButton>)
}

SearchCon.SearchTitle = function SearchSearchTitle({ children, ...restProps }) {
    return (<SearchTitle {...restProps}>{children}</SearchTitle>)
}

SearchCon.SearchForm = function SearchSearchForm({ children, ...restProps }) {
    return (<SearchForm {...restProps}>{children}</SearchForm>)
}

SearchCon.Line = function SearchLine({ children, ...restProps }) {
    return (<Line {...restProps}/>)
}

SearchCon.TopSearchCon = function SearchTopSearchCon({ children, ...restProps }) {
    return (<TopSearchCon {...restProps}>{children}</TopSearchCon>)
}

SearchCon.ButtonContainer = function SearchButtonContainer({ children, ...restProps }) {
    return (<ButtonContainer {...restProps}>{children}</ButtonContainer>)
}

SearchCon.ResultCon = function SearchResultCon({ children, ...restProps }) {
    return (<ResultCon {...restProps}>{children}</ResultCon>)
}

SearchCon.TextResult = function SearchTextResult({ children, ...restProps }) {
    return (<TextResult {...restProps}>{children}</TextResult>)
}