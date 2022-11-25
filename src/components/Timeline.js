import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

  .video-card{   
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-columns: minmax(200px,1fr);
      span{ 
        padding-right: 24px;
      }
    }
    .favorite-card{
      grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
      grid-auto-columns: minmax(100px,1fr);
      .photo-alurafavoritos{
        aspect-ratio: 0;
        clip-path: circle();
      }     
      span {
        font-size: 14px;
        text-align: center;
      }
    }
`;

