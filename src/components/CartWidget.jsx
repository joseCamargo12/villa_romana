import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {count} =  useContext(CarContext);
    const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

    return(

        <div style={{display: 'flex', width: 35, justifyContent: 'space-between', alignItems: 'center'}}>
            <Link to="/cart">
                🛒
            {<span style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{totalQuantity}</span>}
            </Link>
        </div>
    )
}

export default CartWidget;