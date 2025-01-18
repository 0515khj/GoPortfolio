import styled from 'styled-components';

export const IntroWrap = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    height: calc(100vh - 60px); 
    overflow: hidden;
    .inner{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        padding: 20px;
        width: 100%;
        max-width: 1000px;
        /* margin: 0 auto;  */
    }

    .box {
        background-color: #444;
        border: 2px solid #888;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        text-align: left;
        height: auto; 
        opacity: 0;
        transform: translateX(100%);
        animation: slideIn 0.5s ease-in-out forwards;

        .link {

            a{  
                text-decoration: none;
                color: #fff;
                &:hover{
                    color: #999;
                }
            }
        }
    }

    .box2 {
        background-color: #444;
        border: 2px solid #888;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        text-align: left;
        height: auto; 
        opacity: 0;
        transform: translateX(100%);
        animation: slideIn 0.5s ease-in-out forwards;

        &:hover{
            background: #999;
            cursor: pointer;
        }
    }

    .box:nth-child(1) {
        animation-delay:0s;
    }
    .box:nth-child(2) {
        animation-delay:0.7s;
    }
    .box:nth-child(3) {
        animation-delay:1.4s;
    }
    .box2:nth-child(4) {
        animation-delay:2.1s;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }


    .title {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 10px;
        color: #fff;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        color: #fff;
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`


export const ModalWrap = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .modal {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        max-width: 850px;
        width: 90%;
        position: relative;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        animation: fadeIn 0.3s ease-in-out;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #ff5555;
        color: #fff;
        border: none;
        padding: 5px 15px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1rem;

        &:hover {
            background: #ff3333;
        }
    }

    h2 {
        margin-bottom: 20px;
        color: #333;
        font-size: 1.8rem;
        font-weight: bold;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0 auto;
    }

    td {
        padding: 10px 15px;
        text-align: left;
        vertical-align: top;
        font-size: 1rem;
        color: #333;
    }

    td:first-child {
        font-weight: bold;
        width: 30%;
        color: #555;
    }

    tr {
        border-bottom: 1px solid #ddd;
    }

    tr:last-child {
        border-bottom: none;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`
export const StackWrap = styled.div`

        .stack-group {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
}

    .stackItem.styled-small img {
    width: 100%; 
    height: auto;
    max-height :60px;
}
        
        .stackItem{
            box-sizing: border-box;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            padding: 5px;
            width: 110px;
            height: 110px;
            border-radius: 6px;

            img{
                border-radius: 8px;
                width: 100%;
                height: auto;
                max-height: 75px;
                margin-bottom: 5px;
            }
        }
    
        .back{

            .stack-group{
                margin-top: 30px;
            }

        }


`