import React from 'react';
import { CarModalWrap } from './koscarStyle';

const CarModal = () => {
    return (
        <CarModalWrap>
            <div>
                <p>
                영상 : 
                </p>
                <a href="https://drive.google.com/file/d/11XHx0MtAYmQ7zb-FiRgoRMiKRJzFW4V9/view?usp=drive_link" target="_blank" rel="">KOSCAR 영상</a>
            </div>
            <div>
                <p>
                깃허브 : 
                </p>
                <a href="https://github.com/0515khj/TeamToast" target="_blank" rel="">KOSCAR 코드</a>
            </div>
        </CarModalWrap>
    );
};

export default CarModal;