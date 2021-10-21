import { makeStyles, Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';


const useStyles = makeStyles (() => ({
    banner:{
        backgroundImage: "url(../../images/Cypto-banner.jpeg)"
    },
        bannerContent:{
            height:400,
            display: "flex",
            flexDirection:"column",
            PaddingTop:25,
            justifyContent: "space-around",
        },
        tagline:{
            display:"flex",
            height:"40%",
            flexDirection:"column",
            justifyContent:"center",
            textAlign: "center"
        }

}))

const Banner = () => {
    const classes = useStyles();
    return (
        <div className ={classes.banner}>
            <Container className ={classes.bannerContent}>
            <div className ={classes.tagline}>
                <Typography
                variant ="h2"
                style={{
                    fontWeight:"bold",
                    marginBottom:15,
                    fontFamily:"Montserrat"
                }}
                >
                Cypto Hunter
                </Typography>
                <Typography
                variant ="subtitle2"
                style ={{
                    color:"darkgrey",
                    textTransform:"capitalize",
                    fontFamily:"Montserrat"
                }}
                >
                Find all the latest updates on your Favorite Crypto Currency
                </Typography>
            </div>
            <Carousel/>
            </Container>
        </div>
    )
}

export default Banner
