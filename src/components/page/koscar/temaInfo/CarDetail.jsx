import React, { useState } from 'react';
import { CarDetailWrap } from './carInfoStyle';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";
import { Carbg } from '../Carbg';

const CarDetail = () => {
    Carbg();

    const [currentimg , setCurrentimg] =useState(0);

    const img = [
        "./assets/images/detail1.png",
        "./assets/images/detail2.png",
    ];

    const GoPrev = ()=> {
        setCurrentimg((previmg)=>
            previmg === 0 ? img.length -1 : previmg - 1
        );
    };

    const GoNext = ()=> {
        setCurrentimg((previmg)=>
            previmg ===  img.length -1 ? 0 : previmg + 1
        );
    }

    return (
        <CarDetailWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src={img[currentimg]} alt="차량 상세 이미지" />
                  <button className='prevBtn' onClick={GoPrev}><FaChevronLeft /></button>
                  <button className='nextBtn' onClick={GoNext}><FaChevronRight /></button>
                </div>

                <div className='info'>
                    <h2>상세페이지</h2>
                    <ul>
                       <li>
                            <strong>차량 정보</strong>
                            <p>차량의 모델명, 제조사, 연식, 주행 거리, 연료 종류, 색상 등 기본 정보를 확인할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>판매자 정보</strong>
                            <p>판매자의 이름, 전화번호, 이메일 등의 정보를 제공하여 구매자가 연락할 수 있도록 지원합니다.</p>
                        </li>
                        <li>
                            <strong>수정/삭제 기능</strong>
                            <p>판매자는 차량 정보를 수정하거나 삭제할 수 있습니다. 수정 버튼을 클릭하면 차량 정보 수정 페이지로 이동합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
          
        </CarDetailWrap>
    );
};

export default CarDetail;