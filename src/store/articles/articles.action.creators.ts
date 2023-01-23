import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "../../utils/axios";
import sleep from "../../utils/sleep";

import {IArticle} from "../../models/article";
import {environment} from "../../environment";


interface ArticlesFetchQuery {
    start?: number;
}


export const getArticles = createAsyncThunk(
    "articles/get",
    async (start: number = 0, thunkApi) => {
        try {
            const { data } = await axios.get<IArticle[]>(`articles?_start=${start}&_limit=${environment.ARTICLES_PER_FETCH}`);

            await sleep(250);

            return data;

        } catch (err) {
            return thunkApi.rejectWithValue("Could not fetch articles");
        }
    }
)
