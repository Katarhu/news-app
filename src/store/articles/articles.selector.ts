import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";


const selectFeature = (state: RootState) => state.articles;

export const selectIsArticlesLoading = createSelector(selectFeature, (state) => state.isLoading);
export const selectArticles = createSelector(selectFeature, (state) => state.articles);
