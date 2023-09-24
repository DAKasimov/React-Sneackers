import { BasketItem } from "./BasketItem"
import close from "../images/close.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Basket = (props) => {
  const {
    isBasket,
    openCloseBasket,
    basketProducts = [],
    deleteBasket = Function.prototype,
    allSum = Function.prototype,
    increment = Function.prototype,
    decrement = Function.prototype,
  } = props

  return (
    <div className={!isBasket ? "notOverlay" : "overlay"}>
      <div className="drawer">
        <h2
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Корзина
          <img
            onClick={openCloseBasket}
            className="removeButton"
            style={{ cursor: "pointer" }}
            src={close}
            height={30}
            width={30}
          />
        </h2>
        <div className="items">
          {basketProducts.length !== 0 ? (
            basketProducts.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  {...item}
                  deleteBasket={deleteBasket}
                  increment={increment}
                  decrement={decrement}
                />
              )
            })
          ) : (
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Корзина пуста
            </h1>
          )}
        </div>

        <div className="cart-total-block">
          {basketProducts.length !== 0 && (
            <div>
              <ul>
                <li style={{ display: "flex" }}>
                  <span>Итого:</span>
                  <div></div>
                  <b>{allSum()} руб.</b>
                </li>
                <li style={{ display: "flex" }}>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{allSum() * 0.05} руб.</b>
                </li>
              </ul>
              
                <button>Оформить заказ</button>
            
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { Basket }
