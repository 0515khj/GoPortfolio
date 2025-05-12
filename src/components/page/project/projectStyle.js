import styled from 'styled-components'

export const ProjectWrap = styled.div`
  background-color: #f9f9f9; 
  border-radius: 8px; 
  padding: 70px 0;
  text-align: center;
  width: 90%; 
  height: 85vh;
  margin: 20px auto; 

  animation: fade 2s forwards;

  @keyframes fade {
    from{ opacity:0; }
    to{ opacity:1; }
  }


  
.text{
		font-size:70px;
		color:#666;
		font-family: 'Arial';
		font-weight:bold;
		line-height:1.2; 
    margin-bottom: 70px;;
	
}
.text span {
	opacity:0;
	display:inline-block; // span 태그를 인라인 블록 요소로 만들어줌
	transform:translateX(-50px); // 원래 위치에서 왼쪽으로 벗어나게 한다.
	animation: slideIn 0.5s forwards; // slideIn 애니메이션 이름과 지속 시간 설정
}
@keyframes slideIn {
	from {
		opacity:0;
		transform:translateX(-50px); // 왼쪽에서 시작한다.
	}
	to{
		opacity: 1;
		transform:translateX(0); // 원래 위치로
	}
}

.move{
	
	animation:fade 0.5s ease forwards;
@keyframes fade {
	from {
		opacity:0.1;
	}
	to {
		opacity: 1;
	}
}
	opacity: 1;
}


  .spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
  }

  .timeline {
    position: relative;
    width: 91%;
    margin: 0 auto 50px;
    height: 3px;
    background: #999;

    .timeline-point {
      position: absolute;
      top: -5px;
      width: 12px;
      height: 12px;
      background: #333;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  }

  .projects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0px;
    margin-top: 20px;
    width: 100%;

    .project-item {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 20%;
      min-width: 200px;
      max-width: 250px;
      transition: 0.3s;
      
      &:hover{ transform:scale(1.04); cursor: pointer;
        border: 1px solid #000;
    }
      .myimg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;

        img{
          width: 80%;
          max-height: 70px;
        }
      }

    a{text-decoration:none; 
        color: #000;
    }
    
      .category {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .date {
        font-size: 14px;
        color: #666;
        margin-bottom: 15px;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto;
        width: 100%;
        max-width: 180px;
        height: 150px;
        border-radius: 8px;
      }

      .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .description {
        font-size: 14px;
        color: #333;
        line-height: 1.5;
      }

    }
  }
  @media only screen and (max-width: 400px) {
    padding: 20px;
    overflow-y: auto;
    .text { 
      font-size:20px;
      margin-bottom: 30px;
    }
    .project-item {
      margin-bottom: 50px;
    }
    
  .myimg{
    max-height: 50%;
  }
  }

`