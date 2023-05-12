import React from 'react';
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';

export const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState()

  return (
    <HeaderStyled>
        <Navbar id="navbar" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand className='nav-title'><Link to="/">Shopping Cart</Link></Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl 
                    id='searchbar' 
                    placeholder='Search...' 
                    className='me-auto'
                    onChange={(e) =>{
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        });
                    }}
                    />
                </Navbar.Text>
                <Nav>
                <Dropdown id="navdrop" className='mr-auto'>
                    <Dropdown.Toggle>
                    <FaShoppingCart id="shoppingCartBttn" />
                    <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu id='nav-dropdown'>
                        {cart.length > 0 ? (
                        <>
                            {cart.map((prod => (
                                <div className='cart-dropdown'>

                                <div className='cart-item' key={prod.id}>
                                    <img src={prod.image} className='cart-item-img'></img>
                                    <span className='cart-item-title'>{prod.name}</span>
                                    <span className='cart-item-price'>&pound;{prod.price}</span>
                                    <AiFillDelete className='cart-delete-icon' onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: prod,})}/>
                                </div>
                                    <hr className='nav-hr'/>
                                </div>
                            )))
                        }
                        <Link to="/cart">
                            <Button className='cart-btn'>Go To Cart</Button>
                        </Link>
                        </>
                        ) : (
                            <span>Cart is Empty!</span>
                            )}
                    </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    </HeaderStyled>
  )
}


const HeaderStyled = styled.div`
#navbar{
    height: 80px;
}
#searchbar{
    width: 500px;
}
#shoppingCartBttn{
    colour: white;
    font-size: 25px;
    padding-right: 5px;
}
#navdrop{
    display: flex;
    width: 400px;
    justify-content: end;
}
#nav-dropdown{
    width: 400px;
    background-color: #343A40;
    color: white;
    
}
#nav-dropdown span{
    padding: 10px;
}

.nav-hr{
    border: 1px solid white;
}

.cart-item{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.cart-item-img{
    width: 75px;
}
.cart-delete-icon{
    cursor: pointer;
}
.cart-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 390px;
    margin: 10px 5px 0 5px;
}

@media (max-width: 771px){
    
    .nav-title{
        font-size: 18px;
    }

    #searchbar{
        width: 250px;
        font-size: 10px;
    }

    #navdrop{
        width: 160px;
    }
    #nav-dropdown{
        width: 175px;
    }
    #nav-dropdown span{
        padding: 5px;
    }
    .cart-item{
        font-size: 10px;
    }
    .cart-item-img{
        width: 40px;
    }
    .cart-btn{
        width: 160px;
        font-size: 10px;
    }
}
`