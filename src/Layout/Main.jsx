import search from "../images/search.svg"
import { CartList } from "../Components/CartList"
import { useEffect, useState } from "react"

export const Main = (props) => {

  const {products, addBasket=Function.prototype, addFavourite, deleteFavourite, setArr=Function.prototype, isLiked, setIsLiked} = props

  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState(products)


  const handleInput = (event) =>{
    setSearchValue(event.target.value)
  }

  const searchFunc = (str) =>{
    setArr(searchResult.filter((item)=>{
      return item.name.toLowerCase().includes(str.toLowerCase())
    }))
  }

  const handleDown = (event) =>{
    if (event.key === 'Enter'){
      searchFunc(searchValue)
    }
  }

  useEffect(()=>{
    if (searchValue === ''){
      setArr(searchResult)
    }

  })

  
 

  return (
    <div className="content">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "30px", margin: "20px" }}>
          Все кроссовки
        </h1>
        <img
          src={search}
          height={15}
          width={15}
          style={{ position: "absolute", left: "1053px", top: "157px" }}
        />
        <input
          onKeyDown={handleDown}
          onChange={handleInput}
          value={searchValue}
          className="search"
          placeholder="Поиск..."
          style={{
            height: "30px",
            margin: "25px 5px 5px 5px",
            padding: "5px 5px 5px 25px",
          }}
          type="text"
        />
      </div>
      <CartList isLiked = {isLiked} setIsLiked = {setIsLiked} products = {products} addBasket={addBasket} deleteFavourite = {deleteFavourite} addFavourite={addFavourite}/>
    </div>
  )
}
