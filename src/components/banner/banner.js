import React from 'react';

import './banner.css';

const Banner = () => {
    return (
        <div>
            <div className='bannerImg'>
                <div className='bannerInformation'>
                    <div className='bannerBorderTop'><span class="long"></span></div>
                    <div className='bannerHeader'>
                        <div>WELCOME TO</div>
                        <div className='bannerIronMass'>
                            <h1 className='bannerIronMassLeft'>IRON</h1>
                            <h1 className='bannerIronMassRight'>MASS</h1>
                        </div>
                        <div>CROSSFIT STUDIO</div>
                    </div>
                    <p className='bannerText'>
                        Since our opening day back in 2013, our Gym classes have provided an inspiring welcoming for everybody! That makes every attendee feel like they are a part of one big and passionate community! With that in mind, you can always reach our fitness instructors for any kind of assistance. Their ultimate goal is to make you as fit and strong as only possible.
                    </p>
                    <div className='bannerButton'>
                        GET STARTED TODAY
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;