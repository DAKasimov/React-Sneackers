import { CartItem } from "./CartItem"

export const CartList = (props) =>{
    const {products, addBasket = Function.prototype, addFavourite = Function.prototype, deleteFavourite, setIsLiked, isLiked} = props
    return (
        <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'space-around'}}>

            {products.length ? products.map((item)=>{
                return (
                    <CartItem setIsLiked = {setIsLiked} isLiked = {isLiked}  deleteFavourite = {deleteFavourite} key={item.id} {...item} addBasket={addBasket} addFavourite ={addFavourite}/>
                )
            }) : <h1>Товаров нет</h1>}
        </div>
    )
}