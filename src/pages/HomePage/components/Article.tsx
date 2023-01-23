import {memo} from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {IArticle} from "../../../models/article";
import {Link} from "react-router-dom";
import ROUTES from "../../../constants/routes";

const MAX_TEXT_LENGTH = 100;

function Article({ id, title, imageUrl, summary, publishedAt, updatedAt }: IArticle) {

    const sliceStringTo = (string: string, length: number) => {
        if( string.length < length ) return string;
        return string.slice(0, length) + "...";
    }

    const slicedTitle = sliceStringTo(title, MAX_TEXT_LENGTH);
    const slicedSummary = sliceStringTo(summary, MAX_TEXT_LENGTH);

    return (
        <Card sx={{
            maxWidth: 400,
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateRows: "200px auto auto",
        }}>
            <CardMedia
                sx={{ height: 200 }}
                image={imageUrl}
                title={slicedTitle}
            />
            <CardContent sx={{
                display: "grid",
                gridAutoFlow: "row",
                gap: 1,
                gridTemplateRows: "auto 1fr minmax(1.5rem, 4.5rem)",
            }}>
                <Typography
                    color="primary"
                    sx={{ fontWeight: 400, fontSize: 14, opacity: 0.8, display: "flex", alignItems: "center", gap: ".5em", mb: 1}}
                >
                    <CalendarTodayIcon fontSize="inherit"/> {publishedAt}
                </Typography>

                <Typography
                    gutterBottom
                    component="div"
                    sx={{
                        fontSize: "1.5rem",
                        maxHeight: "5.25rem",
                        lineHeight: "1.75rem",
                        overflow: "hidden"
                    }}
                >
                    {slicedTitle}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        maxHeight: "4.5rem",
                        overflow: "hidden"
                    }}
                >
                    {slicedSummary}
                </Typography>

            </CardContent>

            <CardActions
                sx={{ pt: 0 }}
            >
                <Button
                    component={Link}
                    to={ROUTES.ARTICLE(id)}
                    size="small"
                    sx={{ fontWeight: 700, fontSize: 16, textTransform: "none" }}
                >
                    Read more &#8594;
                </Button>
            </CardActions>
        </Card>
    );
}

export default memo(Article);
