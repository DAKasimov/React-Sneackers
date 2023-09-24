import { useEffect } from "react"
import { OI } from "../Components/OI"

export const Order = (props) =>{
    const {increment = Function.prototype, decrement = Function.prototype, deleteBasket = Function.prototype, orderList = [], setBasket = Function.prototype, basket = [], setOrder = Function.prototype} = props

    useEffect(()=>{
        setOrder([...basket])
    },[basket])
    return (
        <div>
            <h1 style={{fontSize : '30px', fontWeight : 'bold', margin : '10px'}}>
                Ваши товары
            </h1>
            <div>
                {orderList.length !== 0 ? orderList.map((item)=>{
                    return <OI increment = {increment} decrement = {decrement} deleteBasket = {deleteBasket} {...item}/>
                }) : <h2 style={{fontSize : '25px', fontWeight : 'bold'}}>Нет товаров</h2>}
                <div>{orderList.length !== 0 ? <button style={{textAlign : 'center'}}>Купить</button> : ''}</div>
            </div>
        </div>
    )
}