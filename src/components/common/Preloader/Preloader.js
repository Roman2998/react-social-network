import React from 'react';
import classes from './Preloader.module.css'

let Preloader = ({ flag = true }) => {
    if (!flag) return "";

    return <section className={classes.preloaderWrap}>
        <div className={classes.preloaderPulse}/>
    </section>
}

export default Preloader;