import React from 'react';
import { StackWrap } from './introStyle';

const Stack = () => {
    
    const frontStacks = [
        {name: 'HTML5', img:'./assets/images/html.jpg'},
        {name: 'CSS3', img:'./assets/images/css.jpg'},
        {name: 'JavaScript', img:'./assets/images/js.jpg'},
        {name: 'TypeScript', img:'./assets/images/ts.jpg'},
        {name: 'React', img:'./assets/images/react.jpg'},
        { name: 'Styled-Components', img: './assets/images/style.jpg'},
        { name: 'Recoil', img: './assets/images/recoil.jpg'},
    ]
    
    const backStack = [
        {name:'Node.js', img:'./assets/images/node.jpg'},
        {name:'Express.js', img:'./assets/images/express.jpg'},
        {name:'Firebase', img:'./assets/images/fire.jpg'},
    ]

    const database = [
        {name:'MySQL', img:'./assets/images/mysql.jpg'},
    ]
    
    const Deployment = [
        {name:'Docker', img:'./assets/images/docker.jpg'},
        {name:'AWS', img:'./assets/images/aws.jpg'},
        
    ]
    
    return (
        <StackWrap>
                <div className="front">
                <h3 className="stack-group">프론트엔드</h3>
                <div style={{display:'flex',gap:'10px'}}>
                {frontStacks.map((stack , index)=>(
                    <div className={`stackItem ${stack.name === 'Styled-Components' ? 'styled-small' : ''}`} key={index}>
                        <img src={stack.img} alt="" />
                        <div className="name">
                            {stack.name}
                        </div>
                    </div>
                ))}
                </div>
                </div>


                <div className="back">
                <h3 className="stack-group">백엔드</h3>
                <div style={{display:'flex',gap:'10px'}}>
                {backStack.map((stack , index)=>(
                    <div className='stackItem' key={index}>
                        <img src={stack.img} alt="" />
                        <div className="name">
                            {stack.name}
                        </div>
                    </div>
                ))}
                </div>
                </div>

                <div className="back">
                <h3 className="stack-group">DB</h3>
                <div>
                {database.map((stack , index)=>(
                    <div className='stackItem' key={index}>
                        <img src={stack.img} alt="" />
                        <div className="name">
                            {stack.name}
                        </div>
                    </div>
                ))}
                </div>
                </div>


                <div className="back">
                <h3 className="stack-group">배포 및 인프라</h3>
                <div style={{display:'flex',gap:'10px'}}>
                {Deployment.map((stack , index)=>(
                    <div className='stackItem' key={index}>
                        <img src={stack.img} alt="" />
                        <div className="name">
                            {stack.name}
                        </div>
                    </div>
                ))}
                </div>
                </div>



            
        </StackWrap>
    );
};

export default Stack;