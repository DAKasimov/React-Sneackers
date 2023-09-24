import logo from "../images/logo.svg"
import basket from "../images/basket.svg"
import user from "../images/user.svg"
import like from "../images/like2.svg"
import cartList from "../images/cart-list.svg"
import { Link } from "react-router-dom"
export const Header = (props) => {
  const {
    openCloseBasket,
    openCloseFavourite,
    allSum = Function.prototype,
  } = props

  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/">
          <img width={40} height={40} src={logo} />
        </Link>
        <div>
          <div>
            <Link to="/" style={{ color: "black" }}>
              <h3
                className="logo"
                style={{ fontWeight: "bold", fontSize: "20px", margin: "5px" }}
              >
                React sneakers
              </h3>
            </Link>
          </div>
          <div>Магазин лучших кроссовок</div>
        </div>
      </div>
      <ul className="headerRight">
        <li style={{ margin: "5px 20px 5px 5px ", cursor: "pointer" }}>
          <img height={18} width={18} src={like} onClick={openCloseFavourite} />
        </li>
        <li style={{ margin: "5px 20px 5px 5px ", cursor: "pointer" }}>
          <Link to="/order">
            <img height={18} width={18} src={cartList} />
          </Link>
        </li>
        <li style={{ margin: "5px 30px 5px 5px ", cursor: "pointer" }}>
          <img onClick={openCloseBasket} height={18} width={18} src={basket} />
          <span style={{ marginLeft: "5px" }}>{allSum()} руб</span>
        </li>
        <li style={{ margin: "5px 10px 5px 5px ", cursor: "pointer" }}>
          <Link to="/user">
            <img height={18} width={18} src={user} />
          </Link>
        </li>
      </ul>
    </header>
  )
}
