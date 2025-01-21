import React, { useState } from 'react';
import { Suddenbg } from '../Suddenbg';
import { SuddenNoticeWrap } from './suddenInfoStyle';

const SuddenNotice = () => {
    Suddenbg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        `${process.env.PUBLIC_URL}/assets/images/edit.png`,
    ];


    return (
        <SuddenNoticeWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="" />
                </div>

                <div className='info'>
                    <h2>수정페이지</h2>
                    <ul>
                     
                    </ul>
                </div>
            </div>
          
        </SuddenNoticeWrap>
    );
};

export default SuddenNotice;