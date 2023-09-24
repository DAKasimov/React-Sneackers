import { useEffect } from 'react'
import close from '../images/close.svg'

export const FavouriteItem = (props) =>{

    const {id, name, price, count, image, deleteFavourite = Function.prototype, addBasket = Function.prototype, setIsFavourite = Function.prototype, isFavourite = isFavourite}= props

   

    

    return (
        <div className='cartItem'>
            <img style={{marginRight : '10px', padding : '7px', borderRadius : '20px'}} src={image} height={100} width={100}/>
            <div style={{marginTop : '30px', marginRight : '30px'}}>
                <p style={{marginBottom : '5px', fontSize : '15px'}}>{name}</p>
                <b>{price} руб.</b>
                <div>
                <button onClick={()=>addBasket({id : id, name : name, price : price, count : count, image : image})} className='btn'>Добавить в корзину</button>
                </div>
            </div>
            <img
             onClick={()=>deleteFavourite(id)}
             className='removeButton' style={{cursor : 'pointer', marginTop : '30px' }} src={close} height={30} width={30}/>
        </div>
    )
}