import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ReviewRating = () => {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Typography component="legend">Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

        </>
    );
}

export default ReviewRating;