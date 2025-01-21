import React, { useState } from 'react';
import { SuddenWrap } from './suddenStyle';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import SuddenModal from './SuddenModal';
import { ModalWrap } from '../intro/introStyle';
import { Suddenbg } from './Suddenbg';

const Sudden = () => {
Suddenbg();
    const [showModal, setShowModal]= useState(false);

    const openTeamModal = () =>{
      setShowModal(true);
    }

    const closeTeamModal = () =>{
      setShowModal(false);
    }

    return (
        <SuddenWrap>
            <div className="inner">

                <div className="left">
                <div className="header">
                <h1>SuddenAttak</h1>
                <span>게임 페이지 쇼핑몰 버전</span>
                </div>
                <div className="info">

                  <div className="row">
                    <p>개발 기간</p>
                    <span>2023.11 ~ 2023.12</span>
                  </div>

                  <div className="row">
                    <p>플랫폼</p>
                    <span>Web</span>
                  </div>

                  <div className="row">
                    <p>개발 인원</p>
                    <span>1명 (개인 프로젝트)</span>
                  </div> 

                </div>{/* info end */}

            <div className="environment">
            <h2>개발 환경</h2> {/* 개발 환경 구분 텍스트 */}
            <div className="row">
              <p>언어</p>
              <span>HTML/CSS, JavaScript</span>
            </div>
            <div className="row">
              <p>프레임워크 & 라이브러리</p>
              <span>React.js, styled-components , Redux</span>
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
                <a href="https://github.com/0515khj/SuddenAttack" target="_blank" rel="">  <button><i><AiOutlineSearch /></i></button></a>
                </div>
            </div>

          </div>

            </div> {/* left end */}

            <div className="right">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/sudden.jpg`} alt="" />
            </div> {/* right end  */}

            </div>

            {showModal && (
              <ModalWrap>
                <div className="modal">
                  <button style={{background:'#607D8B'}} className="close" onClick={closeTeamModal}>X</button>
                <SuddenModal/>
              </div>
              </ModalWrap>
            )}

        </SuddenWrap>
    );
};

export default Sudden;