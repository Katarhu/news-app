import {Box} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectArticlesStart} from "../../../store/articles/articles.selector";
import {getArticles} from "../../../store/articles/articles.action.creators";
import {increaseLimit} from "../../../store/articles/articles.slice";

function IntersectionBox() {

    const { ref, inView } = useInView({

    });

    const dispatch = useAppDispatch();
    const start = useAppSelector(selectArticlesStart);

    useEffect(() => {
        if( !inView ) return;

        dispatch(increaseLimit());
        dispatch(getArticles(start));
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
