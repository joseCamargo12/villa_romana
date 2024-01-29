import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../context/CarContext';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const Cart = () => {

  const [products, setProducts] = useState([]);
  const { count } = useContext(CarContext);
  console.log(count);

  const idsList = count.map((item) => item.id);

  useEffect(() => {
    if (idsList.length !== 0) {
      const db = getFirestore();
      const itemColletion = collection(db, "products");

      const q = query(itemColletion, where("id", "in", idsList));

      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setProducts([...products, doc.data()])
        });
      });
    }
  }, []); 

  return count.length === 0 ? (<h1>No hay productos en el carrito de compras</h1>) : null;
};

export default Cart;