import React from 'react'
import { CartState } from '../Context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import styled from 'styled-components';

export const Home = () => {

    const { state: { products}, productState: {sort, byStock, byFastDelivery, byRating, searchQuery}} = CartState();
    const transformProducts = () =>{
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }
        if (!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
        if (byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }
        if (byRating){
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
        }
        if (searchQuery){
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
        }
        return sortedProducts;
    }
    return (
        <HomeStyled>
        <div className='home'>
            <Filters />
            <div className='productContainer'>
                {transformProducts().map((prod) =>{
                    return <SingleProduct prod = { prod } key={prod.id} />
                })}
            </div>
        </div>
        </HomeStyled>
  )
}

const HomeStyled = styled.div`
    .home{
        display: flex;
    }
    .productContainer{
        display: flex;
        width: 78%;
        padding: 20px;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    @media (max-width: 771px){
        .productContainer{
            padding: 5px;
            width: 75%;
        }    
    }
`