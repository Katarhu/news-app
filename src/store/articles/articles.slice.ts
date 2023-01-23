import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticle, IArticleState} from "../../models/article";
import {getArticles} from "./articles.action.creators";


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
        builder
            .addCase(getArticles.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(getArticles.fulfilled.type, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                state.articles = action.payload;
            })
            .addCase(getArticles.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export default articlesSlice.reducer;
