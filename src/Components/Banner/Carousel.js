import React from 'react'
import { makeStyles } from '@material-ui/core';
import { axios } from 'axios';
import { TrendingCoins } from '../config/api';
import { CryptoState } from '../../CryptoContext';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme)=> ({
carousel: {
    height:"50%",
    display:"flex",
    alignItems:"center"
}
}));

const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const { currency } = CryptoState();
    

    const classes = useStyles();


    const fetchTrendingCoins = async () =>{
        const { data } = await axios.get(TrendingCoins(currency));

        setTrending(data);
    
    };
    

    useEffect(() => {
        fetchTrendingCoins();

        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    return (
        <div className ={classes.carousel}>
            Carousel
        </div>
    )
};

export default Carousel;
