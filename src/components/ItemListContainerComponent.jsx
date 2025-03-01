import Button from 'react-bootstrap/Button'
const ItemListContainer = (props) => {
    console.log(props)
    const {greeting} = props
    return(
        <div>
            <h1>{greeting}</h1>
            <Button>Boton</Button>
        </div>
    )
}

export default ItemListContainer