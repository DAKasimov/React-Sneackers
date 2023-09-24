import { FavouriteItem } from "./FavouriteItem"
import close from '../images/close.svg'

export const FavouriteList = (props) =>{

    const {favourite = [], openCloseFavourite = Function.prototype, isFavourite, deleteFavourite = Function.prototype, addBasket = Function.prototype, setIsFavourite = Function.prototype} = props

    return (
        <div className={!isFavourite ? 'notOverlay' : 'overlay'}>
      <div className="drawer">
        <h2
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Избранное
          <img
            
            className="removeButton"
            style={{ cursor: "pointer" }}
            src={close}
            height={30}
            width={30}
            onClick={openCloseFavourite}          />
        </h2>
        <div className="items">
          {favourite.length !== 0 ? favourite.map((item)=>{
            return (
              <FavouriteItem isFavourite = {isFavourite} setIsFavourite = {setIsFavourite} addBasket = {addBasket} deleteFavourite = {deleteFavourite}  key={item.id} {...item} />
            )
          }) : <h1 style={{fontSize : '30px', fontWeight : 'bold'}}>Нет избранных товаров</h1>}
         
        </div>
      </div>
    </div>
    )
}