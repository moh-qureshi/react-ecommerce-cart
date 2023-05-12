import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Rating from './Rating';
import { CartState } from '../Context/Context';

const SingleProduct = ( {prod} ) => {

  const {state: {cart}, dispatch} = CartState()
  return (
    <ProductsStyled>
    <div className='products'>
      <Card border='dark' class="shadow-lg p-3 mb-5 bg-white rounded" className={!prod.inStock ? "card-outOfStock" : "card-inStock"}>
        <Card.Img variant='top' src={prod.image} className='card-img' alt='card-img'/>
        <Card.Body>
          <Card.Title className='card-title'>{prod.name}</Card.Title>
          <Card.Subtitle className='card-subtitle'>
            <span className='card-price'>&pound;{prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Next Day Delivery</div>
            ) : (
              <div>3-5 Day Delivery</div>
            )}
          </Card.Subtitle>
          <Card.Text className='card-text'><Rating rating={prod.ratings} /></Card.Text>
        </Card.Body>
        {cart.some((p) => p.id === prod.id) ? (
            <Button className='card-btn' variant="danger" onClick={() =>{
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
            }}>Remove From Cart</Button>

          ) : (
            <Button className='card-btn' variant="dark" disabled={!prod.inStock} onClick={() =>{
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }}>
          {!prod.inStock ? "Out of Stock" : "Add To Cart"}
          </Button>
          )}
      </Card>
    </div>
    </ProductsStyled>
  )
}

const ProductsStyled = styled.div`

.products{
  margin: 20px 0;
}

.card-img{
    width: 275px;
  }

.card-subtitle{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.card-price{
  font-weight: bold;
}

.card-outOfStock{
  opacity: 0.6;
}

.card-btn{
  width: 275px;
}

@media (max-width: 771px){
  .products{
    margin: 10px;
  }

  .card-inStock, .card-outOfStock{
    width: 150px;
  }

  .card-img{
    width: 150px;
  }

  .card-title{
    font-size: 13px;
  }

  .card-subtitle, .card-text{
    font-size: 10px;
  }

  .card-btn{
    font-size: 12px;
  }
}
`

export default SingleProduct