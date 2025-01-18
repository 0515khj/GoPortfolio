import React, { useEffect, useState } from 'react';
import { TeamToastWrap } from './teamtoastStyle';
import { Link, useNavigate } from 'react-router-dom';
import { Teambg } from './Teambg';
import { AiOutlineSearch } from "react-icons/ai";
import TeamModal from './TeamModal';
import { ModalWrap } from '../intro/introStyle';

const TeamToast = () => {
    Teambg();

    const [showModal, setShowModal]= useState(false);
    const navigate = useNavigate();

    const openTeamModal = () =>{
      setShowModal(true);
    }

    const closeTeamModal = () =>{
      setShowModal(false);
    }

    return (
        <TeamToastWrap>
            <div className="inner">

                <div className="left">
                <div className="header">
                <h1>TeamToast</h1>
                <span>유연한 업무관리 협업 플랫폼</span>
                </div>
                <div className="info">

                  <div className="row">
                    <p>개발 기간</p>
                    <span>2024.11 ~ 2024.12</span>
                  </div>

                  <div className="row">
                    <p>플랫폼</p>
                    <span>Web</span>
                  </div>

                  <div className="row">
                    <p>개발 인원</p>
                    <span>5명 (팀 프로젝트)</span>
                  </div> 

                </div>{/* info end */}

            <div className="environment">
            <h2>개발 환경</h2> {/* 개발 환경 구분 텍스트 */}
            <div className="row">
              <p>언어</p>
              <span>HTML/CSS, TypeScript, JavaScript</span>
            </div>
            <div className="row">
              <p>프레임워크 & 라이브러리</p>
              <span>React.js, Node.js, Recoil, styled-components, Express.js</span>
            </div>
            <div className="row">
              <p>데이터베이스</p>
              <span>MySQL</span>
            </div>
            <div className="row">
              <p>도구</p>
              <span>
                Docker, Nginx, ESLint
              </span>
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
                <Link to={'/lay/teamWBS'}>
                <button><i><AiOutlineSearch /></i></button>
                </Link>
            </div>

          </div>

            </div> {/* left end */}

            <div className="right">
                <img src="/assets/images/cover.png" alt="" />
            </div> {/* right end  */}

            </div>

            {showModal && (
              <ModalWrap>
                <div className="modal">
                  <button style={{background:'#038c8c'}} className="close" onClick={closeTeamModal}>X</button>
                <TeamModal/>
              </div>
              </ModalWrap>
            )}

        </TeamToastWrap>
    );
};

export default TeamToast;