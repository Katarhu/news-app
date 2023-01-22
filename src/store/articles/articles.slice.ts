import {createSlice} from "@reduxjs/toolkit";
import {IArticleState} from "../../models/article";


const initialState: IArticleState = {
    articles: [],
    isLoading: false,
    error: null,
}

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})


export default articlesSlice.reducer;
