import { useState } from "react"
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useGetCategories } from "../hooks/useProducts";
import '../styles/Create.css';

const CreateProduct = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const {categories} = useGetCategories();

  const handleFieldReset = () => {
    setTitle("")
    setDescription("")
    setPrice(0)
    setThumbnail("")
    setCategory("")
  }

  const handleCreateProduct = () => {

    const data = {
      title,
      description,
      price,
      thumbnail,
      category
    }

    if(title === ''){
      return alert("El titulo es mandatorio")
    }

    const db = getFirestore();

    const productsCollection = collection(db, "products");
    addDoc(productsCollection, data).then(({ id }) => {
      alert('Producto creado');
      handleFieldReset();
    });
  };

  return (
    <div class="creador">
      <h1>Crear producto</h1>
      <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Descripcion" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Imagen" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
      {/* <input type="text" placeholder="Categeria" value={category} onChange={(e) => setCategory(e.target.value)} /> */}
      <select name="category" id="categorie">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={handleCreateProduct}>Crear producto</button>
    </div>
  )
}

export default CreateProduct