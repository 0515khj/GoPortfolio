import React, { useState } from 'react';
import { MyrealTripWrap } from './MyrealTripStyle';
import { AiOutlineSearch } from "react-icons/ai";
import SuddenModal from './MyrealModal';
import { ModalWrap } from '../intro/introStyle';
import { MyrealTripbg } from './MyrealTripbg';

const MyrealTrip = () => {
MyrealTripbg();
    const [showModal, setShowModal]= useState(false);

    const openTeamModal = () =>{
      setShowModal(true);
    }

    const closeTeamModal = () =>{
      setShowModal(false);
    }

    return (
        <MyrealTripWrap>
            <div className="inner">

                <div className="left">
                <div className="header">
                <h1>Myrealtrip</h1>
                <span>여행사 홈페이지</span>
                </div>
                <div className="info">

                  <div className="row">
                    <p>개발 기간</p>
                    <span>2023.10 ~ 2023.10</span>
                  </div>

                  <div className="row">
                    <p>플랫폼</p>
                    <span>Web</span>
                  </div>

                  <div className="row">
                    <p>개발 인원</p>
                    <span>3명 (팀 프로젝트)</span>
                  </div> 

                </div>{/* info end */}

            <div className="environment">
            <h2>개발 환경</h2> {/* 개발 환경 구분 텍스트 */}
            <div className="row">
              <p>언어</p>
              <span>HTML/CSS, JavaScript</span>
            </div>
           
           
          </div>
          
          <div className='Introduction'>
            
            <div className="row">
                <p>개발 정보</p>
                <button
                onClick={openTeamModal}
                ><i><AiOutlineSearch /></i></button>
            </div>

            <div className="row">
                <p>개발 소개(리드미)</p>
                <div>
                <a href="https://github.com/0515khj/myrealtrip" target="_blank" rel="">  <button><i><AiOutlineSearch /></i></button></a>
                </div>
            </div>

          </div>

            </div> {/* left end */}

            <div className="right">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/myrealmain.png`} alt="" />
            </div> {/* right end  */}

            </div>

            {showModal && (
              <ModalWrap>
                <div className="modal">
                  <button style={{background:'#FFA726'}} className="close" onClick={closeTeamModal}>X</button>
                <SuddenModal/>
              </div>
              </ModalWrap>
            )}

        </MyrealTripWrap>
    );
};

export default MyrealTrip;