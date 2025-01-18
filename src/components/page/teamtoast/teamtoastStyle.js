import styled from 'styled-components'

export const TeamToastWrap = styled.div`
background-color: #f9f9f9; 
  border-radius: 8px; 
  text-align: center;
  width: 90%; 
  height: 85vh;
  margin: 20px auto; 
  padding: 50px 0;

  .inner{
    display: flex;
    width: 100%;
    height: 100%; 

    .left {
      flex: 2.5;
      padding: 20px;
      text-align: left;

      
    .header{
        display: flex;
        
        h1 {
          font-size: 2rem;
          width: 180px;
          color: #038c8c;
          font-weight: bold;
          margin-bottom: 20px;
            position:relative ;
          &::after{
                content: ""; /* 가상 요소로 선 추가 */
                position: absolute;
                top: 70%;
                right: 0;
                transform: translateY(-50%);
                width: 1.5px; 
                height: 50%; 
                background: #999; /* 선 색상 */
        }
    }
        span{
            margin-left: 10px;
            color: #333;
            line-height: 2.5;
            font-size: 17px;
      }
      }

      p {
        font-size: 15px;
        line-height: 1.6;
        color: #333;
      }

      .info {
        margin-bottom: 20px;
        .row {
          display: flex;
          width: 100%;
          /* justify-content: space-between; */
          align-items: center;
          margin-bottom: 10px;

          p {
            width: 200px;
            font-size: 1rem;
            color: #333;
            font-weight: bold;
          }

          span {
            font-size: 1rem;
            color: #666;
        }
    }
}

.Introduction {
    margin-top: 50px;

    .row{
        margin-top: 10px;
        display: flex;
        p{width:195px;}
        button{
          font-size: 1.2rem;
          background: none;
          i{
            &:hover{
              color: #038c8c;
            }
          }
          &:hover{cursor: pointer;}
        }
    }
      }

      .environment {
        padding-top: 100px;

        h2 {
          font-size: 1.2rem;
          color: #666;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .row {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;

          p {
            font-size: 1rem;
            color: #333;
            width: 200px;
            font-weight: bold;
          }

          span {
            font-size: 1rem;
            color: #666;
            text-align: right;
          }
        }
      }

    }



    .right {
      flex: 2.5; /* 오른쪽 영역 40% */
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-width: 600px; /* 최대 이미지 크기 */
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }

`


export const TeamModalWrap =styled.div`
display: flex;
align-items: center;
justify-content: center;
div{
  display: flex;
  p {width:100px;
  }
  a {text-decoration:none; color:#000;
    &:hover{color:#038c8c}
  }
}

`