import React from 'react';
import { CarMainWrap } from './carInfoStyle';
import { useNavigate } from 'react-router-dom';
import { Carbg } from '../Carbg';

const CarMain = () => {
    Carbg();
    const navigate = useNavigate();

    return (
        <CarMainWrap>
             <div className="inner">
               
                <div className="imageWrapper">
                  {/* <img src="/assets/images/main.png" alt="" /> */}
                  <img src="/assets/images/main1.jpg" alt="" />
                </div>

                <div className='info'>
                    <h2>차량 목록</h2>
                    <ul>
                        <li>
                            <strong>검색 기능</strong>
                        </li>
                        <li>
                            화면 상단 검색창에서 차량 이름을 입력 후 검색 버튼을 클릭하면 해당 이름에 맞는 차량이 표시됩니다.
                        </li>
                        <li>
                            검색 결과는 입력된 조건에 따라 실시간으로 반영됩니다.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>필터 기능</strong>
                        </li>
                        <li>
                            왼쪽 필터 메뉴에서 브랜드, 연식, 주행거리, 연료, 가격 등을 설정하여 원하는 차량을 선택할 수 있습니다.
                        </li>
                        <li>
                            선택한 필터는 리스트에 바로 적용되어 결과를 필터링합니다.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>차량 상세보기</strong>
                        </li>
                        <li>
                            차량 리스트의 항목을 클릭하면 상세 페이지로 이동하여 차량에 대한 추가 정보를 확인할 수 있습니다.
                        </li>
                        <li>
                            상세 페이지에는 차량의 사진, 세부 스펙, 판매자 정보 등이 표시됩니다.
                        </li>
                    </ul>
                </div>
            </div>
          
        </CarMainWrap>
    );
};

export default CarMain;