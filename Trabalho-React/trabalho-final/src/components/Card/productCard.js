import React from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartItensContext } from "../../context/CartItem";


export const ProductCard = ({ produto }) => {

  const { cartItens, addItem } = useContext(CartItensContext)













  return (
    <>
      <Card style={{ width: '18rem', height: '47%', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Card.Img style={{ width: '100%', height: '47%' }} variant="top" src={produto.nomeImagemProduto} />
        <Card.Body>
          <Card.Title>{produto.nomeProduto}</Card.Title>
          <Card.Text>
            {produto.descricao}
          </Card.Text>
          <Button variant="danger" onClick={() => addItem({ ...produto, quantidade: 1 })}>Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>


    </>);
}