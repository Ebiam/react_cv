import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import JsLogo from '../../assets/JavaScript-Logo.jpg';
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '10%',
        marginInline: '1%',
        maxWidth: 275,
        [theme.breakpoints.down("md")] : {
            maxWidth: 140
        }
    },
    media: {
        height: 140,
    }
}));

function MyCard (props) {



    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));


    return(
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        style={{height: 90, maxWidth: 100}}
                        image={props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        En savoir plus...
                    </Button>
                </CardActions>
            </Card>
    )
}

MyCard.defaultProps = {
    image: JsLogo
};

MyCard.propTypes = {
    //image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default MyCard;
