import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating, onClick}) => {
  return (
    <div>
        <label>Rating:</label>
        {[...Array(5)].map((_, i) =>(
            <span key={i} onClick={() => onClick(i)}>
                { rating > i ? (
                <AiFillStar fontSize="15px" display={"inline"} />)
                : 
                (<AiOutlineStar fontSize="15px" />) }
            </span>
        ))}
    </div>
  )
}

export default Rating