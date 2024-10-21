export default function Printers({printer}){
    console.log(printer)
    const {brand, model, price, availability, type} = printer;
    return (
        <div style={{border: "2px solid black", borderRadius: "10px", margin: "15px", background: "lightgreen"}}>
            <h3>Name: {brand}</h3>
            <p>Model: {model}</p>
            <p>Price: ${price}</p>
            <p>Availability: {availability}</p>
            <p>Type: {type}</p>
        </div>
    )
}