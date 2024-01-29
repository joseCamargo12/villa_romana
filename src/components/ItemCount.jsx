import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CarContext } from "../context/CarContext"

const ItemCount = ({productId}) => {

    const [ countItem, setCountItem ] = useState(1)
    const { count, setCount } = useContext(CarContext);

    const handleAdd = () => {
        setCountItem(countItem + 1);
    }

    const handleRemove = () => {
        setCountItem(countItem - 1);
    }

    const handleAddProductToCart = () => {
        const productExists = count.find((item) => item.id === productId);

        if (productExists){
            setCount(
                count.map((item) => 
                item.id === productId
                    ? {...item, quantity: item.quantity + countItem}
                    : item
                )
            );
            } else {
                setCount([...count, {id: productId, quantity: countItem}]);
            }

            setCountItem(1);

        };

    return (
        <div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Button onClick={handleAdd}>+</Button>
                <span>{countItem}</span>
                <Button onClick={handleRemove}>-</Button>
            </div>
            <Button onClick={handleAddProductToCart}>Agregar al carrito</Button>

        </div>
    )
}

export default ItemCount