
import "./Cart.css"

export default function Cart({cart, handleRemoveCartFromLS}){
    return (
        <div className="cartContainer">
            <h4>Cart: {cart.length}</h4>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img> 
                    <button onClick={() => handleRemoveCartFromLS(bottle.id)}>remove</button> <br />
                </div>)
            }
            
        </div>
    )
}