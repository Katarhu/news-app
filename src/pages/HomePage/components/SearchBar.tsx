import {ChangeEventHandler, useEffect, useState} from "react";

import {IconButton, InputBase, Paper} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import useDebounceValue from "../../../hooks/useDebounceValue";

import {useAppDispatch} from "../../../hooks/redux";
import {setArticlesFilter} from "../../../store/articles/articles.slice";


function SearchBar() {
    const [query, setQuery] = useState('');
    const debounceQuery = useDebounceValue(query);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setArticlesFilter(debounceQuery));
    }, [debounceQuery])

    const handleInputChange: ChangeEventHandler = (event) => {
        setQuery((event.target as HTMLInputElement).value);
    }

    return (
        <Paper
            component="form"
            onSubmit={(event) => { event.preventDefault() }}
            elevation={3}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 600 }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                onChange={handleInputChange}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by keywords"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}

export default SearchBar;
