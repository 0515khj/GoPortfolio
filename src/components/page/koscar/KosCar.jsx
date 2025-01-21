import React, { useState } from 'react';
import { KosCarWrap } from './koscarStyle';
import { Link } from 'react-router-dom';
import { Carbg } from './Carbg';
import { AiOutlineSearch } from "react-icons/ai";
import TeamModal from './CarModal';
import { ModalWrap } from '../intro/introStyle';

const KosCar = () => {
    Carbg();

    const [showModal, setShowModal]= useState(false);

    const openTeamModal = () =>{
      setShowModal(true);
    }

    const closeTeamModal = () =>{
      setShowModal(false);
    }

    return (
        <KosCarWrap>
            <div className="inner">

                <div className="left">
                <div className="header">
                <h1>KOSCAR</h1>
                <span>개인 중고차 거래 플랫폼</span>
                </div>
                <div className="info">

                  <div className="row">
                    <p>개발 기간</p>
                    <span>2024.10.08 ~ 2024.10.18</span>
                  </div>

                  <div className="row">
                    <p>플랫폼</p>
                    <span>Web</span>
                  </div>

                  <div className="row">
                    <p>개발 인원</p>
                    <span>4명 (팀 프로젝트)</span>
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
              <span>React.js, Node.js, styled-components, Express.js</span>
            </div>
            <div className="row">
              <p>데이터베이스</p>
              <span>MySQL</span>
            </div>
            <div className="row">
              <p>API & 라이브러리</p>
              <span>RESTful API (JSON), Axios, dotenv</span>
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
                <p>개발 소개</p>
                <Link to={'/carlay/carWBS'}>
                <button><i><AiOutlineSearch /></i></button>
                </Link>
            </div>

          </div>

            </div> {/* left end */}

            <div className="right">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/koscar.png`} alt="" />
            </div> {/* right end  */}

            </div>

            {showModal && (
              <ModalWrap>
                <div className="modal">
                  <button style={{background:'#007bff'}} className="close" onClick={closeTeamModal}>X</button>
                <TeamModal/>
              </div>
              </ModalWrap>
            )}

        </KosCarWrap>
    );
};

export default KosCar;