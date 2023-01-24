import {useEffect} from "react";

import {Box} from "@mui/material";

import {useInView} from "react-intersection-observer";

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectArticleFilter, selectArticlesError, selectArticlesStart} from "../../../store/articles/articles.selector";
import {getArticles} from "../../../store/articles/articles.action.creators";

import {increaseArticlesFetchStart} from "../../../store/articles/articles.slice";


function IntersectionBox() {

    const articlesFilter = useAppSelector(selectArticleFilter);
    const articlesError = useAppSelector(selectArticlesError)


    const { ref, inView } = useInView({

    });

    const dispatch = useAppDispatch();
    const start = useAppSelector(selectArticlesStart);

    useEffect(() => {
        console.log(articlesFilter);
        if( !inView || !!articlesFilter || articlesError ) return;
        dispatch(increaseArticlesFetchStart());
        dispatch(getArticles({ start }));
    }, [inView]);


    return (
        <Box
            ref={ref}
            sx={{ height: 10 }}
        >
        </Box>
    );
}

export default IntersectionBox;
