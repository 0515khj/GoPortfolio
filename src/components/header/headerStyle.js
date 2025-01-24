import styled from 'styled-components'

export const HeaderWrap = styled.div`

    height: 60px;
  a { color: #999;
    text-decoration:none;}

  .inner { 
    display: flex;
    width: 100%;
    height: 100%; 
    align-items: center; 
    justify-content: center; 
    padding-top: 10px;
    ul{
      display: flex;
      justify-content: center;
      align-items: center; 
      gap: 300px;

      .active li {
          color: #fff; 
          padding-bottom: 10px;
          border-bottom: 1px solid #fff;
        }

        li{ font-size:25px; width:100%;
          
          &:hover {color:#fff;}
        }
      }

      @media only screen and (max-width:400px) {
          ul{
            gap: 100px;
          }
      }
      
}


`