import { GetApi } from "./use-api";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

const useContent = (path,params) => {
    const [content,SetContent] = useState([]);

    let header = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
    }

    useEffect(() => {
        let payload =  async () => {
            let data = await GetApi(path,params,header);
            //console.log(data);
            return SetContent(data);
        }
       
        payload();
    },[]);

    return content;
}

export default useContent;