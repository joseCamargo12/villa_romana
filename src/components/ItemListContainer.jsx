const ItemListContainer = ({greeting}) => {
    return (
        <div style= {{display: "flex", fontSize: "35px", justifyContent: 'center', marginTop:'4.4rem'}}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;