import axios, {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {environment} from "../environment";

const instance = axios.create({
    baseURL: environment.baseApiUrl,
});

export default instance;
