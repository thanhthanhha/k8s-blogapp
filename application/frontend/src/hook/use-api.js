import axios from 'axios';
import useAuth from '../helpers/useAuth';


export const GetApi = async (path,params,header) => {

    let res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/${path}`, {
        params,
        header
    })
    .then((res) => {
        if (res) {
 
            return res.data;
        }
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
    })

    return res;
};

export const PostApi = async (path,data,params,header) => {
    let res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/${path}`, data, {
        params,
        header
    })
    .then((res) => {
        if (res.data) {
            return res.data;
        }
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
    })

    return res;
}

