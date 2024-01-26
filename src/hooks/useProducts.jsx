import { useState, useEffect } from "react"
import {getCategories, getProductsByCategory } from "../services"
import { collection, getDocs, doc, getDoc, getFirestore} from "firebase/firestore";


export const useGetProducts = (collectionName = 'products') => {
  const [poductsData, setPodructsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
  
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection).then((snapshot) => {
      setPodructsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [])

  return { poductsData }

}


export const useGetProductById = (collectionName = 'products', id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
  const db = getFirestore();
  const docRef = doc(db, collectionName, id)

  getDoc(docRef).then((doc) => {
    setProductData({id: doc.id, ...doc.data() })
  })
      
  }, [id]);

  return { productData };
};

export const useGetCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return { categories }

}

export const useGetProductsByCategory = (id) => {
  const [poductsData, setPodructsData] = useState([])

  useEffect(() => {
    getProductsByCategory(id)
      .then(response => {
        setPodructsData(response.data.products)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return { poductsData }

}