import { Header } from "./Layout/Header"
import { Footer } from "./Layout/Footer"
import { Main } from "./Layout/Main"
import { Basket } from "./Components/Basket"
import { Order } from "./Pages/Order"
import { User } from "./Pages/User"
import { NotFound } from "./Pages/NotFound"
import { FavouriteList } from "./Components/FavouriteList"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import first from "./images/sneackers/1.webp"
import second from "./images/sneackers/2.webp"
import third from "./images/sneackers/3.webp"
import four from "./images/sneackers/4.webp"
import five from "./images/sneackers/5.webp"
import six from "./images/sneackers/6.webp"
import seven from "./images/sneackers/7.webp"
import eight from "./images/sneackers/8.webp"
import nine from "./images/sneackers/9.webp"
import ten from "./images/sneackers/10.webp"

function App() {
  const products = [
    {
      id: 1,
      name: "Abc",
      price: 1000,
      image: first,
      count: 1,
    },
    {
      id: 2,
      name: "Кроссовки Nike",
      price: 1000,
      image: second,
      count: 1,
    },
    {
      id: 3,
      name: "Кроссовки Nike",
      price: 1000,
      image: third,
      count: 1,
    },
    {
      id: 4,
      name: "Кроссовки Nike",
      price: 1000,
      image: four,
      count: 1,
    },
    {
      id: 5,
      name: "Кроссовки Nike",
      price: 1000,
      image: five,
      count: 1,
    },
    {
      id: 6,
      name: "Кроссовки Nike",
      price: 1000,
      image: six,
      count: 1,
    },
    {
      id: 7,
      name: "Кроссовки Nike",
      price: 1000,
      image: seven,
      count: 1,
    },
    {
      id: 8,
      name: "Кроссовки Nike",
      price: 1000,
      image: eight,
      count: 1,
    },
    {
      id: 9,
      name: "Кроссовки Nike",
      price: 1000,
      image: nine,
      count: 1,
    },
    {
      id: 10,
      name: "Кроссовки Nike",
      price: 1000,
      image: ten,
      count: 1,
    },
  ]

  const [arr, setArr] = useState([...products])

  const [basket, setBasket] = useState([])
  const [order, setOrder] = useState([...basket])

  const [favourite, setFavourite] = useState([])
  const [isFavourite, setIsFavourite] = useState(false)

  const [isBasket, setIsBasket] = useState(false)

  const [isLiked, setIsLiked] = useState(false)

  const openCloseBasket = () => {
    setIsBasket(!isBasket)
  }

  const openCloseFavourite = () => {
    setIsFavourite(!isFavourite)
  }

  const deleteBasket = (id) => {
    setBasket(
      basket.filter((item) => {
        return item.id !== id
      })
    )
  }

  const increment = (obj) => {
    let flag = false
    let temp = basket
    let tempPrice
    if (obj.count === 0) {
      tempPrice = obj.price / 1
    } else {
      tempPrice = obj.price / obj.count
    }
    for (let i = 0; i < basket.length; i++) {
      if (obj.id === basket[i].id) {
        flag = true
        break
      }
    }
    if (flag === false) {
      setBasket([obj, ...basket])
    } else {
      temp.forEach((item) => {
        if (item.id === obj.id) {
          item.count += 1
          item.price += tempPrice
        }
      })
      setBasket([...temp])
    }
  }

  const decrement = (obj) => {
    let flag = false
    let temp = basket
    let tempPrice = obj.price / obj.count
    for (let i = 0; i < basket.length; i++) {
      if (obj.id === basket[i].id) {
        flag = true
        break
      }
    }
    if (flag === false) {
      setBasket([obj, ...basket])
    } else {
      temp.forEach((item) => {
        if (item.id === obj.id) {
          if (item.count > 1) {
            item.count -= 1
            item.price -= tempPrice
          }
        }
      })
      setBasket([...temp])
    }
  }

  const addBasket = (obj) => {
    let flag = false
    let temp = basket
    let tempPrice = obj.price
    for (let i = 0; i < basket.length; i++) {
      if (obj.id === basket[i].id) {
        flag = true
        break
      }
    }
    if (flag === false) {
      setBasket([obj, ...basket])
    } else {
      temp.forEach((item) => {
        if (item.id === obj.id) {
          item.count += 1
          item.price += tempPrice
        }
      })
      setBasket([...temp])
    }
  }

  const deleteFavourite = (id) => {
    setFavourite(
      favourite.filter((item) => {
        return item.id !== id
      })
    )
  }

  const addFavourite = (obj) => {
    let flag = false
    for (let i = 0; i < favourite.length; i++) {
      if (obj.id === favourite[i].id) {
        flag = true
        break
      }
    }
    if (flag === false) {
      setFavourite([obj, ...favourite])
    }
  }

  const allSum = () => {
    return basket.reduce((acc, item) => acc + item.price, 0)
  }

  useEffect(() => {
    console.log(favourite)
  }, [favourite])

  return (
    <div className="wrapper">
      <Basket
        isBasket={isBasket}
        openCloseBasket={openCloseBasket}
        basketProducts={basket}
        deleteBasket={deleteBasket}
        allSum={allSum}
        increment={increment}
        decrement={decrement}
      />

      <FavouriteList
        setIsFavourite={setIsFavourite}
        addBasket={addBasket}
        favourite={favourite}
        isFavourite={isFavourite}
        openCloseFavourite={openCloseFavourite}
        deleteFavourite={deleteFavourite}
      />

      <main>
        <Router>
          <Header
            allSum={allSum}
            openCloseBasket={openCloseBasket}
            openCloseFavourite={openCloseFavourite}
          />
          <Switch>
            <Route path="/order">
              <Order increment = {increment} decrement = {decrement} deleteBasket = {deleteBasket} orderList = {order} setBasket = {setBasket} basket = {basket} setOrder = {setOrder} />
            </Route>

            <Route exact path="/">
              <Main
                setArr={setArr}
                products={arr}
                addBasket={addBasket}
                deleteFavourite={deleteFavourite}
                addFavourite={addFavourite}
                setIsLiked={setIsLiked}
                isLiked={isLiked}
              />
            </Route>

            <Route path="/user">
              <User />
            </Route>

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </main>
    </div>
  )
}

export default App
