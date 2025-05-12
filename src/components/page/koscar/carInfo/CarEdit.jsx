import React, { useState } from 'react';
import { CarEditWrap } from './carInfoStyle';
import { Carbg } from '../Carbg';

const CarEdit = () => {
    Carbg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        `${process.env.PUBLIC_URL}/assets/images/edit.png`,
    ];


    return (
        <CarEditWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="" />
                </div>

                <div className='info'>
                    <h2>수정페이지</h2>
                    <ul>
                    <li>
                            <strong>차량 정보</strong>
                            <p>차량의 모델명, 제조사, 연식, 주행 거리, 연료 종류, 색상 등 기본 정보를 수정 할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>판매 상태</strong>
                            <p>판매중 또는 판매완료 를 선택할 수 있고 판매 완료를 누를시 메인페이지에 더이상 보이지 않고 마이페이지에서만 확인 할 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
          
        </CarEditWrap>
    );
};

export default CarEdit;