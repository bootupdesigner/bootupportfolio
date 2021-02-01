import React from 'react';
import curtis from '../photos/curtis.png'

const Banner = () => {
    return(
<div className="banner">
    <h2 className="banner">Curtis Shepard</h2>
    <img className="banner" src={curtis} alt="Curtis's headshot" height="15%" width="15%" />
</div>
    );
};

export default Banner;