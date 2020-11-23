import React from 'react'
import {
    ReviewsContainer,
    ReviewssHeading ,
    ReviewsWrapper,
    ReviewsCard,
    ReviewsImg,
    ReviewsInfo,
    ReviewsTitle,
    ReviewsDesc

    
  } from './ReviewsComponens';

const Reviews= ({data}) => {
    return (
      <ReviewsContainer>
          <ReviewssHeading >Customer Reviews</ReviewssHeading >
          <ReviewsWrapper>
          {data.map((product, index)=>{
                   return(
                       <ReviewsCard key={index}>
                           < ReviewsImg src={product.img} alt={product.alt} />
                           <ReviewsInfo>
                           <ReviewsTitle>{product.name}</ReviewsTitle>
                           <ReviewsDesc>{product.Reviews}</ReviewsDesc>
                           </ReviewsInfo>
                       </ReviewsCard>
                   )
               })}
          </ReviewsWrapper>
      </ReviewsContainer>
    )
}

export default Reviews
