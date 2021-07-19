import React, { useEffect } from 'react'
import Product from '../components/Product'
import './HomeScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../redux/actions/productActions';

function HomeScreen() {
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    //console.log(products)

    useEffect(() => {
        (async () => {
            dispatch(listProducts());
        })();
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title"> Latest Products </h2>
            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> :
                    products && products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeScreen
