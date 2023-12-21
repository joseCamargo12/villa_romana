import { useState, useEffect } from "react"
import { getProducts, getProductById, getCategories, getProductsByCategory } from "../services"


export const useGetProducts = (limit = 10) => {
  const [poductsData, setPodructsData] = useState([])

  useEffect(() => {
    getProducts(limit)
      .then(response => {
        setPodructsData(response.data.products)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return { poductsData }

}


export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductById(id)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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