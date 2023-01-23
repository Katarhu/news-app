import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticle, IArticleState} from "../../models/article";
import {getArticles} from "./articles.action.creators";
import {environment} from "../../environment";



const initialState: IArticleState = {
    articles: [],
    isLoading: false,
    error: null,
    start: 0,
}

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        increaseLimit: (state) => { state.start += environment.ARTICLES_PER_FETCH }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(getArticles.fulfilled.type, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                state.articles = [...state.articles, ...action.payload];
            })
            .addCase(getArticles.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export default articlesSlice.reducer;
export const { increaseLimit } = articlesSlice.actions;
