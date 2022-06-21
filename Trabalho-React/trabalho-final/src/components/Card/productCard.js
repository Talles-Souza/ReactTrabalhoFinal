import React from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext, CartItensContext } from "../../context/CartItem";

export const ProductCard = (props) => {

  const { cartItens} = useContext(CartItensContext)
  const { addItem } = useContext(CartContext)
  function addItemCart(produto) {
    console.log(produto, cartItens);
    addItem(produto)
  }

  return (
    <>
      <Card style={{ width: '18rem', height: '47%', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Card.Img style={{ width: '100%', height: '47%' }} variant="top" src={props.produto.nomeImagemProduto} />
        <Card.Body>
          <Card.Title>{props.produto.nomeProduto}</Card.Title>
          <Card.Text>
            {props.produto.descricao}
          </Card.Text>
          <Button variant="danger" onClick={() => addItemCart(props.produto)}>Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>
    </>);
}