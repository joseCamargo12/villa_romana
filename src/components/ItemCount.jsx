import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CarContext } from "../context/CarContext"

const ItemCount = (productId) => {

    const [countItem, setCountItem] = useState(0)
    const { count, setCount } = useContext(CarContext);

    const handleAdd = () => {
        setCountItem(countItem + 1);
        setCount(count + countItem)
    }

    const handleRemove = () => {
        if (countItem !== 0) {
            setCountItem(countItem - 1);
            setCount(count - 1); // Resta 1 al valor actual de count
        }
    }

    const handleAddProductToCart = () => {

    
        const productFind = count.filter(item => item.id === productId)
        if (productFind){
            const newCount = count.map(item => {
                if (item.id === productId){
                    return {
                        ...item,
                        quantity: item.quantity + countItem
                    }
                } else {
                    return item
                }
            });
            setCount(newCount);
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