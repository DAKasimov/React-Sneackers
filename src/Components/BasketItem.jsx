import first from '../images/sneackers/1.webp'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import close from '../images/close.svg'
export const BasketItem = (props) =>{
    const {id, name, image, price, count, deleteBasket, increment, decrement} = props
    return (
        <div className='cartItem'>
            <img style={{marginRight : '10px', padding : '7px', borderRadius : '20px'}} src={image} height={100} width={100}/>
            <div style={{marginTop : '30px', marginRight : '30px'}}>
                <p style={{marginBottom : '5px', fontSize : '15px'}}>{name}</p>
                <b>{price} руб.</b>
                <div style={{margin : '5px 0 0 0'}}>
                    <img style={{cursor : 'pointer'}} onClick={()=>increment({id: id, name: name, price: price, image : image, count: count})} src={plus} height={15} width={15} alt="" /> {count} <img style={{cursor : 'pointer'}} src={minus} onClick={()=>decrement({id: id, name: name, price: price, image : image, count: count})} height={15} width={15} alt="" />
                </div>
            </div>
            <img
            onClick={()=>deleteBasket(id)}
             className='removeButton' style={{cursor : 'pointer', marginTop : '30px' }} src={close} height={30} width={30}/>
        </div>
    )
}