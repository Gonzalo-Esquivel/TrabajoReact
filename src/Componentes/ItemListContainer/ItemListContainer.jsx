import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) =>{
    return(
        <div className="contenedor">
            <p>listado de productos </p>
            <p>{greeting}</p>
        </div>
    )
}