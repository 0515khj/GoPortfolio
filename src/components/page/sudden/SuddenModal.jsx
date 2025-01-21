import React from 'react';
import { SuddenModalWrap } from './suddenStyle';

const SuddenModal = () => {
    return (
        <SuddenModalWrap>
            <div>
                <p>
                배포사이트 : 
                </p>
                <a href="https://0515khj.github.io/SuddenAttack/#/" target="_blank" rel="">SuddenAtack 배포사이트</a>
            </div>
            <div>
                <p>
                깃허브 : 
                </p>
                <a href="https://github.com/0515khj/SuddenAttack/tree/master/src" target="_blank" rel="">SuddenAtack 코드</a>
            </div>
        </SuddenModalWrap>
    );
};

export default SuddenModal;