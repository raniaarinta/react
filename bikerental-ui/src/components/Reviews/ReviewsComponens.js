import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  /* width: 100vw; */
  min-height: 80vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background:   #fff;
  color:#331a00;
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ReviewsCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ReviewsImg = styled.img`
  height: 50px;
  min-width: 50px;
  max-width: 100%;
`;

export const ReviewssHeading = styled.h1`
  font-size: clamp(3rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;

  
`;

export const ReviewsTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`;

export const ReviewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items:left;
  padding: 0rem;
  text-align: left;
`;

export const ReviewsDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;
