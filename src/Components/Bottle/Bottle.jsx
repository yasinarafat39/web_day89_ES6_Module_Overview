
 
import "./Bottle.css"

export default function Bottle({bottle, handleAddToCart}){ 
    const {category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p style={{color: "darkgreen"}}>Price: ${price}</p>
            <button onClick={() => {handleAddToCart(bottle)}}>Purchase</button>
        </div>
    )
}
