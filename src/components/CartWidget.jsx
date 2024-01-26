import { useContext } from "react";
import { CarContext } from "../context/CarContext";


const CartWidget = () => {

    const {count} =  useContext(CarContext);
    console.log(count)
    return(

        <div style={{display: 'flex', width: 35, justifyContent: 'space-between', alignItems: 'center'}}>
            🛒
            {/* <span style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{count}</span> */}
        </div>
    )
}

export default CartWidget;