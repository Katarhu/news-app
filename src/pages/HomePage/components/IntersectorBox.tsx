import {useEffect} from "react";

import {Box} from "@mui/material";

import {useInView} from "react-intersection-observer";

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectArticleFilter, selectArticlesStart} from "../../../store/articles/articles.selector";
import {getArticles} from "../../../store/articles/articles.action.creators";

import {increaseArticlesFetchStart} from "../../../store/articles/articles.slice";


function IntersectionBox() {

    const articlesFilter = useAppSelector(selectArticleFilter);

    const { ref, inView } = useInView({

    });

    const dispatch = useAppDispatch();
    const start = useAppSelector(selectArticlesStart);

    useEffect(() => {
        if( !inView || !!articlesFilter ) return;
        console.log(start);
        dispatch(increaseArticlesFetchStart());
        console.log(start);
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
