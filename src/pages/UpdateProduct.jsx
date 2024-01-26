import { useParams } from "react-router-dom"
import { useGetProductById } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const UpdateProduct = () => {
    

    const { id } = useParams();

    const { productData } = useGetProductById("products", id)
    console.log(productData)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    
    useEffect(() => {
        setTitle(productData.title)
        setDescription(productData.description)
        setPrice(productData.price)
        setThumbnail(productData.thumbnail)
        setCategory(productData.category)
    }, [productData])

    const handleUpdateProduct = () => {
        const data = {
            title,
            description,
            price,
            thumbnail,
            category
        };

        const db = getFirestore();
        const productsCollection = doc(db, "products", id)
        updateDoc(productsCollection, data).then(() => {
            alert("Producto actualizado")
        })
    }

  return (
    <div>
      <h1>Crear producto</h1>
      <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Descripcion" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Imagen" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
      {/* <input type="text" placeholder="Categeria" value={category} onChange={(e) => setCategory(e.target.value)} /> */}
      {/* <select name="category" id="categorie">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select> */}
      <button onClick={handleUpdateProduct}>Actualizar</button>
    </div>
  )
}

export default UpdateProduct