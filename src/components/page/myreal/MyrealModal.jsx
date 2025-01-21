import React from 'react';
import { MyrealModalWrap } from './MyrealTripStyle';

const MyrealModal = () => {
    return (
        <MyrealModalWrap>
            <div>
                <p>
                배포사이트 : 
                </p>
                <a href="https://0515khj.github.io/myrealtrip/index.html" target="_blank" rel="">MyrealTrip 배포사이트</a>
            </div>
            <div>
                <p>
                깃허브 : 
                </p>
                <a href="https://github.com/0515khj/myrealtrip" target="_blank" rel="">MyrealTrip 코드</a>
            </div>
        </MyrealModalWrap>
    );
};

export default MyrealModal;