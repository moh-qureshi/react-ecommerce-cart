import React from 'react'
import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import Rating from './Rating'
import { CartState } from '../Context/Context'

const Filters = () => {

    const { productState: { byStock, byFastDelivery, byRating, sort }, productDispatch } = CartState();
    return (
    <FiltersStyled>
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <div>
            <Form.Check 
            inline 
            label="Ascending" 
            name="group1" 
            type="radio" 
            id={"inline-1"} 
            onChange={() => productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
            })}
            checked={sort === "highToLow" ? true: false}
            />
        </div>
        <div>
            <Form.Check
            inline 
            label="Descending" 
            name="group1" 
            type="radio" 
            id={"inline-2"} 
            onChange={() => productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
            })}
            checked={sort === "lowToHigh" ? true: false}
            />
        </div>
        <div>
            <Form.Check 
            inline 
            label="Include Out of Stock" 
            name="group1" 
            type="checkbox" 
            id={"inline-3"} 
            onChange={() => productDispatch({
                type: "FILTER_BY_STOCK",
            })}
            checked={byStock}
            />
        </div>
        <div>
            <Form.Check 
            inline 
            label="Next Day Delivery Only" 
            name="group1" 
            type="checkbox" 
            id={"inline-4"}
            onChange={() => productDispatch({
                type: "FILTER_BY_DELIVERY",
            })}
            checked={byFastDelivery}
            />
        </div>
        <div className='rating'>
            <Rating rating={byRating} 
            onClick={(i) => productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
            })} />
        </div>
        <Button 
        variant='light'
        onClick={() => productDispatch({
            type: "CLEAR_FILTERS",
        })}>
        Clear Filters
        </Button>
    </div>
    </FiltersStyled>
  )
}

const FiltersStyled = styled.div`
.title{
    color: white;
    font-size: 20px;
    padding: 30px 0;
}

.filters{
    margin: 10px;
    padding: 10px 20px;
    height: 100vh;
    background-color: #343A40;
    color: silver;
    display: flex;
    flex-direction: column;
}

.filters div{
    padding: 2.5px 0;
}

.rating{
    display: flex;
    align-items: center;
    cursor: pointer;
}

@media (max-width: 771px){
    .filters{
        width: 80%;
        padding: 10px;
        margin: 5px;
    }

    .filters div{
        font-size: 10px;
    }

    .filters button{
        font-size: 10px;
    }

    .title{
        font-size: 15px;
    }
}
`

export default Filters