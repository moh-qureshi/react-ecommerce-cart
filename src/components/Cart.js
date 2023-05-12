import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import { AiFillCreditCard, AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Cart = () => {

    const { state: {cart}, dispatch } = CartState()

    const [total, setTotal] = useState();

    useEffect(() =>{
        setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0))}, 
        [cart]
    );

  return (
    <CartStyled>
        <div className='cart-page'>
            
            {cart.length > 0 ? (
                <>
            <div className='cart-page-header'>
                <h1>Thank You for shopping with us!</h1>
                <Link to="/"><Button>Continue Shopping</Button></Link>
            </div>    
            {cart.map((prod => (
                <div className='cart-item' key={prod.id}>
                    <div className='cart-product'>
                    <img src={prod.image} className='cart-page-img' alt='cart-page-img'></img>
                    <span className='cart-page-title'>{prod.name}</span>
                    <span className='cart-page-price'>&pound;{prod.price}</span>
                    <AiFillDelete className='cart-page-delete-icon' onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: prod,})}/>
                    </div>
                    <hr className='hr'/>
                </div>
            )))
        }
            </>
            ) : (
                <div className='cart-page-header'> 
                    <h1>Your Cart is Empty!</h1>
                    <Link to="/"><Button>Continue Shopping</Button></Link>
                </div>
            )}
        </div>
              <div className='subtotal-section'>
              {cart.length > 0 ? (
              <>
                <span className='subtotal-title'>Subtotal ({cart.length}) items</span>
                <span className='subtotal-price'>Total: £{total}</span>    
                <div className='subtotal-buttons'>
                    <Link to="/"><Button>Continue Shopping</Button></Link>
                    <Button>Checkout <span><AiFillCreditCard className='checkout-icon'/></span></Button>
                </div>
              </>
              ) : (
              <>
              <span className='subtotal-title'>No Items in Cart</span>
                <div className='subtotal-buttons'>
                    <Link to="/"><Button>Continue Shopping</Button></Link>
                </div> 
              </>
              )}
            </div>
    </CartStyled>
  )
}

const CartStyled = styled.div`
display: flex;
justify-content: space-around;


.cart-page-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}
.cart-page-img{
    width: 150px;
}
.cart-product{
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 15%;
    align-items: center;
    font-size: 20px;
}
.hr{
    border: 1px solid #343A40;
}
.subtotal-section{
    display: flex;
    flex-direction: column;
    background-color: #343A40;
    color: white;
    width: 25%;
    height: 100vh;
    margin: 10px 0;
    padding: 10px;
}

.subtotal-title{
    font-size: 25px;
    margin: 20px 0;
}

.subtotal-price{
    font-size: 20px;
    margin: 20px 0;
}

.subtotal-buttons{
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
}
@media (max-width: 771px){
    .cart-page-header h1{
        font-size: 25px;
    }
    .cart-product{
        font-size: 15px;
        width: 90%;
        margin: 0 5%;
    }
    .cart-page-img{
        width: 75px;
    }
    .subtotal-section{
        width: 30%;
    }
    .subtotal-title{
        font-size: 20px;
    }
    .subtotal-price{
        font-size: 15px;
    }
    .subtotal-buttons button{
        font-size: 10px;
    }
}


`