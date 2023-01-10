import React from 'react';
import store from '../store/store';
import { productAdded } from '../reducers/productsReducer';
import { productsSelect } from '../reducers/productsReducer';
import { useSelector,useDispatch} from 'react-redux';
let  index  = 0
const product = {
    product:{
        id:++index,
        name:'Orange'+index,
        amount:5
    }
}
store.dispatch(productAdded(product))

// store.dispatch({type:"todos/todoAdded",payload:{name:"kaung Htet Hmue"}});

 const Product = ()=>{
    const products = useSelector(productsSelect);
    console.log(products);
    const dispatch = useDispatch()
    let productItems = products.map((product,index)=><h1 key={index}>{product.name}</h1>)

    return(
        <div className=''>
            <div className="flex flex-row justify-items-center">
                <div className="basis-1/2 bg-amber-500">
                    {productItems}

                </div>
                <div className="basis-1/2 bg-green-200 content-center items-center p-3">
                    <button type="button" onClick={ ()=>dispatch(productAdded(product))} className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Click</button>
                </div>
            </div>
        </div>
    )
}

export default Product