import styled from 'styled-components'

export const ProjectWrap = styled.div`
  background-color: #f9f9f9; 
  border-radius: 8px; 
  padding: 100px 0;
  text-align: center;
  width: 90%; 
  height: 85vh;
  margin: 20px auto; 

  .timeline {
    position: relative;
    width: 90%;
    margin: 0 auto 50px;
    height: 2px;
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
    gap: 20px;
    margin-top: 20px;

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
        margin: 15px 0;
        width: 180px;
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
`