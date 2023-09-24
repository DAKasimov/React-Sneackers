import plus from "../images/plus.svg"
import search from "../images/search.svg"
import like1 from "../images/like1.svg"
import like2 from "../images/like2.svg"
import checked from "../images/checked.svg"
import first from "../images/sneackers/1.webp"
import second from "../images/sneackers/2.webp"
import third from "../images/sneackers/3.webp"
import four from "../images/sneackers/4.webp"
import five from "../images/sneackers/5.webp"
import six from "../images/sneackers/6.webp"
import seven from "../images/sneackers/7.webp"
import eight from "../images/sneackers/8.webp"
import nine from "../images/sneackers/9.webp"
import ten from "../images/sneackers/10.webp"
import { useEffect, useState } from "react"
export const CartItem = (props) =>{

  const {id, name, price, count, image, addBasket = Function.prototype, addFavourite = Function.prototype, deleteFavourite} = props

    
  const [isLiked, setIsLiked] = useState(false)
    


    const like = () => {
        addFavourite({id : id, name : name, price : price, count : count, image : image})
        setIsLiked(!isLiked)
        
    }

    useEffect(()=>{
      console.log(isLiked);
      if (!isLiked){
        deleteFavourite(id)
      }
    },[isLiked])

    return (
        <div className="card">
            <img onClick={like} style={{padding : '2px', position : 'absolute', cursor : 'pointer'}} src={!isLiked ? like2 : like1 } height={25} width={25} />
            <img height={130} width={130} src={image} />
            <p>{name}</p>
            <div style={{ display: "flex" }}>
              <div className="cardButton">
                <p>Цена:</p>
                <b>{price} руб</b>
              </div>
              <img
                style={{ cursor: "pointer", margin: "10px 10px 10px 30px" }}
                width={15}
                height={15}
                src={plus}
                onClick={()=>addBasket({id : id, name : name, price : price, count : count, image : image})}
              />
            </div>
          </div>
    )
}