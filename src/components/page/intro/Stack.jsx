import React from 'react';
import { StackWrap } from './introStyle';

const Stack = () => {
    
    const frontStacks = [
        {name: 'HTML5', img: `${process.env.PUBLIC_URL}/assets/images/html.jpg`},
        {name: 'CSS3', img:`${process.env.PUBLIC_URL}/assets/images/css.jpg`},
        {name: 'JavaScript', img:`${process.env.PUBLIC_URL}/assets/images/js.jpg`},
        {name: 'TypeScript', img:`${process.env.PUBLIC_URL}/assets/images/ts.jpg`},
        {name: 'React', img:`${process.env.PUBLIC_URL}/assets/images/react.jpg`},
        { name: 'Styled-Components', img: `${process.env.PUBLIC_URL}/assets/images/style.jpg`},
        { name: 'Recoil', img: `${process.env.PUBLIC_URL}/assets/images/recoil.jpg`},
    ]
    
    const backStack = [
        {name:'Node.js', img:`${process.env.PUBLIC_URL}/assets/images/node.jpg`},
        {name:'Express.js', img:`${process.env.PUBLIC_URL}/assets/images/express.jpg`},
        {name:'Firebase', img:`${process.env.PUBLIC_URL}/assets/images/fire.jpg`},
    ]

    const database = [
        {name:'MySQL', img:`${process.env.PUBLIC_URL}/assets/images/mysql.jpg`},
    ]
    
    const Deployment = [
        {name:'Docker', img:`${process.env.PUBLIC_URL}/assets/images/docker.jpg`},
        // {name:'AWS', img:`${process.env.PUBLIC_URL}/assets/images/aws.jpg`},
        
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