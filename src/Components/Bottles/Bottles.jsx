import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle"
import "./Bottles.css"
import { addToLS, getStoredCart, removesFromLS } from "../../utilities/localstorage"
import Cart from "../Cart/Cart"

export default function Bottles(){
 
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
 
    useEffect( () => {
        fetch("bottles.json")
        .then( (res) => res.json())
        .then( (data) => setBottles(data)) 
    }, [])


    // load cart from local storage
    useEffect( () => {
        if(bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart)


            const savedCart = [];
            for(let id of storedCart){
                // console.log(id) 
                const bottle =  bottles.find((bottle) => bottle.id === id)
                if(bottle) {
                    savedCart.push(bottle)
                }
            }

            setCart(savedCart)
        }
    }, [bottles])

 

    const handleAddToCart = bottle => {   
        if(addToLS(bottle.id)){
            const newCart = [...cart, bottle];
            setCart(newCart)
        }
    }

    const handleRemoveCartFromLS = id => {
        // visual(from UI) cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from Local Storage
        removesFromLS(id);
        console.log("removed")
    }


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveCartFromLS={handleRemoveCartFromLS} ></Cart>
            
            <div className="bottleContainer">
                {
                    bottles.map((bottle) => <Bottle 
                    key={bottle.id}
                    bottle={bottle} 
                    handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    )
}