import React, { useEffect, useState } from 'react';
import { IntroWrap, ModalWrap } from './introStyle';
import { RxGithubLogo } from "react-icons/rx";
import { ImBlogger2 } from "react-icons/im";
import Stack from './Stack';

const Intro = () => {

    useEffect(() => {
                document.body.style.backgroundColor = '#333'; 
                return () => {
                  document.body.style.backgroundColor = ''; 
                };
              }, []);


    const [open , setOpen] = useState(false);

    const openModal = () =>{
        setOpen(true);
    }
    const closeModal = () =>{
        setOpen(false);
    }



              
    return (
        <IntroWrap>
            <div className="inner">

            <div className="box">
                <ul>
                    <li className="title">ABOUT</li>
                    <li>김현진</li>
                    <li>1996.05.15</li>
                    <li>01065439118</li>
                    {/* <li>부천시 원미구</li> */}
                </ul>
            </div>
            <div className="box">
                <ul>
                    <li className="title">EDUCATION</li>

                    <li>
                        한국소프트웨어기술진흥협회(KOSTA)
                        <p>
                        (2024.07.15~2024.12.17)
                        </p>
                    </li>

                    <li>이젠 아카데미컴퓨터학원
                        <p>
                            (2023.08.17~2023.12.26)
                        </p>
                    </li>

                </ul>
            </div>
            <div className="box">
                <ul>
                    <li className="title">채널</li>
                    <li className='link'><i style={{marginRight:'5px'}}><RxGithubLogo /></i><a href="https://github.com/0515khj?tab=repositories" target="_blank" rel="">GitHub</a></li>
                    <li className='link'><i style={{marginRight:'5px'}}><ImBlogger2 /></i><a  href="https://nicekhj.tistory.com/" target="_blank" rel="">T-story</a></li>
                </ul>
            </div>
            <div className="box2"
            onClick={openModal}>
                <ul>
                    <li className='title'>기술 스택</li>
                </ul>
            </div>
            </div>

            {open && (
                <ModalWrap>
                    <div className="modal">
                        <button className="close" onClick={closeModal}>
                            X
                        </button>
                        <Stack/>
                    </div>
                </ModalWrap>
            )}
        </IntroWrap>
    );
};

export default Intro;