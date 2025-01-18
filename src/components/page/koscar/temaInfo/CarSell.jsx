import React from 'react';
import { CarSellWrap } from './carInfoStyle';
import { Carbg } from '../Carbg';

const CarSell = () => {
    Carbg();

    return (
        <CarSellWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  <img src="./assets/images/sell.png" alt="" />
                </div>

                <div className='info'>
                    <h2>판매하기</h2>
                    <ul>
  <li>
    <strong>모델명 입력</strong><br />
        사용자 입력 필드로 차량의 모델명을 텍스트로 작성합니다.<br />
  </li>
  <li>
    <strong>브랜드 선택</strong><br />
        드롭다운 메뉴로 차량 제조사를 선택할 수 있습니다.<br />
  </li>
  <li>
    <strong>연식(제조년도) 선택</strong><br />
        차량의 제조년도를 드롭다운 메뉴로 선택합니다.<br />
  </li>
  <li>
    <strong>주행거리 선택</strong><br />
        차량의 주행거리(km)를 드롭다운 메뉴로 선택합니다.<br />
  </li>
  <li>
    <strong>연료 선택</strong><br />
        차량의 연료 종류를 드롭다운 메뉴로 선택합니다.<br />
  </li>
  <li>
    <strong>차량 판매 가격</strong><br />
        사용자가 판매 희망 가격을 설정합니다.<br />
  </li>
  <li>
    <strong>차량 색깔</strong><br />
        차량의 색상을 선택하는 드롭다운 메뉴입니다.<br />
  </li>
  <li>
    <strong>차량 사진 업로드</strong><br />
        차량 사진 파일을 업로드할 수 있는 버튼입니다.
  </li>
  <li>
    <strong>저장/취소 버튼</strong><br />
        입력된 데이터를 저장하고 판매 등록을 진행합니다.<br />
        입력한 모든 데이터를 초기화하거나 페이지 종료.
  </li>
  
</ul>
                </div>
            </div>
          
        </CarSellWrap>
    );
};

export default CarSell;