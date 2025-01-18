import styled from "styled-components";

const CommonWrap = styled.div`
 .inner{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
  
      .imageWrapper {
        width: 100%; 
        max-width: 75%;
        height: auto;
        margin: 0 auto; 
  img {
    display: block; 
    width: 100%;
    height: auto; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
      }
    }
`

export const TeamWBSWrap = styled(CommonWrap)`
  /* .inner{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
  
      .imageWrapper {
        width: 100%; 
        max-width: 50%;
        height: auto;
        margin: 0 auto; 
  img {
    display: block; 
    width: 100%;
    height: auto; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
      }
    } */
`

export const TeamDBWrap = styled(CommonWrap)`

`

export const TeamlogWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 45%;
    height: auto;

    img {
      display: block; 
    width: 100%;
    height: auto; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
 
`
export const TeamJoinWrap = styled.div`

.inner{
  display: flex;
  gap: 20px; 

  
  .imageWrapper {
    width: 100%; 
    max-width: 40%;
    height: 720px;
    overflow-y: auto;
    img {
      display: block; 
      width: 100%;
      height: auto; 
      border-radius: 4px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    }
  }
  .info{
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
  }
}
  `

export const TeamSidebarWrap = styled.div`

  .inner{
    width: 100%;
    height: 100%;
    .side1{
      ul {
        list-style: none;
        padding: 0;
        .top { margin-top:20px;} 
        li {
          margin: 10px 5px;
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        li:hover {
          background-color: #d3d3d3;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .active li {
          background-color: #038c8c; /* 선택된 항목 배경색 */
          color: #fff; /* 선택된 항목 글자색 */
        }
      }
    }
  }

`

export const TeamFindWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 45%;
    height: auto;

    img {
      display: block; 
    width: 100%;
    height: auto; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`

export const TeamProfileWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 45%;
    height: auto;
    position: relative;
    
    button{
      background: none; 
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      i{font-size:20px;}
      &:hover{
        border: 1px solid #038c8c;
        background: #e3e3e3;

      }
    }
    .prevBtn{
      position:absolute; left:0; top:50%;
    }
    .nextBtn{
      position:absolute; right:0; top:50%;
    }

    img {
      display: block; 
    width: 100%;
    height: 600px;
     
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`

export const TeamSpaceWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 50%;
    height: auto;
    position: relative;
    
    button{
      background: none; 
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      i{font-size:20px;}
      &:hover{
        border: 1px solid #038c8c;
        background: #e3e3e3;

      }
    }
    .prevBtn{
      position:absolute; left:0; top:50%;
    }
    .nextBtn{
      position:absolute; right:0; top:50%;
    }

    img {
      display: block; 
    width: 100%;
    height: 600px; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`
export const TeamProjectWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 60%;
    height: auto;
    position: relative;
    
    button{
      background: none; 
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      i{font-size:20px;}
      &:hover{
        border: 1px solid #038c8c;
        background: #e3e3e3;

      }
    }
    .prevBtn{
      position:absolute; left:0; top:50%;
    }
    .nextBtn{
      position:absolute; right:0; top:50%;
    }

    img {
    display: block; 
    width: 100%;
    box-sizing: border-box;
    height: 700px; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`
export const TeamListWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 50%;
    height: auto;
    position: relative;
    
    button{
      background: none; 
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      i{font-size:20px;}
      &:hover{
        border: 1px solid #038c8c;
        background: #e3e3e3;

      }
    }
    .prevBtn{
      position:absolute; left:0; top:50%;
    }
    .nextBtn{
      position:absolute; right:0; top:50%;
    }

    img {
      display: block; 
    width: 100%;
    height: 650px; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`
export const ActiveSprintWrap = styled.div`
.inner{
  display: flex;
    gap: 20px; /* 이미지와 텍스트 간격 */

  .imageWrapper {
    width: 100%; 
    max-width: 65%;
    height: auto;
    position: relative;
    
    button{
      background: none; 
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      i{font-size:20px;}
      &:hover{
        border: 1px solid #038c8c;
        background: #e3e3e3;

      }
    }
    .prevBtn{
      position:absolute; left:0; top:50%;
    }
    .nextBtn{
      position:absolute; right:0; top:50%;
    }

    img {
      display: block; 
    width: 100%;
    height: 700px; 
    border-radius: 4px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
}
.info{
  flex: 1; /* 텍스트 영역 확장 */
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #038c8c;
        margin-bottom: 20px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 20px;
        li {
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.6;
          strong {
            color: #038c8c;
          }
        }
      }
}
}
`