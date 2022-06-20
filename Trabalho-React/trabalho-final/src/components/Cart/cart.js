import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, CartItensContext } from "../../context/CartItem";


const ItemCart = (props) => {
    const [quantidade, setQuantidade] = useState(1);
    const total = props.item.valorUnitarioProduto * quantidade;
    return (

        <tr>
            <td class="p-4">
                <div class="media align-items-center">
                    <img src={props.item.nomeImagemProduto} class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                    <div class="media-body">
                        <p>{props.item.nomeProduto}</p>
                    </div>
                </div>
            </td>
            <td class="text-right font-weight-semibold align-middle p-4">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(props.item.valorUnitarioProduto)}</td>
            <td class="align-middle p-4"><input type="number" class="form-control text-center" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} /></td>
            <td class="text-right font-weight-semibold align-middle p-4">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(total)}</td>
            <td class="text-center align-middle px-0"><a href="/" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
        </tr>
    );
}

export const Cart = (props) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/home")
    }

    const { cartItens, addItem } = useContext(CartContext)
    useEffect(() => {
        addItem({
            "idProduto": 18,
            "nomeProduto": "Introdução à Programação com Python",
            "descricao": "Conceitos básicos de programação.",
            "qtdEstoqueProduto": 15,
            "dataCadastroProduto": "03/06/2022",
            "valorUnitarioProduto": 57.0,
            "nomeImagemProduto": "https://images-na.ssl-images-amazon.com/images/I/41qeEtBu02L._SX357_BO1,204,203,200_.jpg",
            "categoriaDTO": {
                "idCategoria": 4,
                "nomeCategoria": "FrontEnd",
                "descricaoCategoria": "Fundamentos sobre       FrontEnd"
            }
        })
        console.log(cartItens);
    }, [])

    return (<>

        <div class="container px-3 my-5 clearfix">

            <div class="card">
                <div class="card-header">
                    <h2>Lista de Itens</h2>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered m-0">
                            <thead>
                                <tr>

                                    <th class="text-center py-3 px-4" style={{ minWidth: '400px' }}>Nome do Produto &amp; Detalhes</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Preço</th>
                                    <th class="text-center py-3 px-4" style={{ width: '120px' }}>Quantidade</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Total</th>
                                    <th class="text-center align-middle py-3 px-0" style={{ width: '40px' }}><a href="/" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cartItens.length > 0 ? (<>
                                    {props.cartItens.map(item => {
                                        return (<ItemCart item={item} />);
                                    })}</>) :
                                    (<tr> <td><div>Carrinho vazio</div></td></tr>)}
                            </tbody>
                        </table>
                    </div>


                    <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
                        <div class="mt-4">

                        </div>
                        <div class="d-flex">
                            <div class="text-right mt-4 mr-5">

                            </div>
                            <div class="text-right mt-4">
                                <label class="text-muted font-weight-normal m-0">Total price</label>
                                <div class="text-large"><strong>$1164.65</strong></div>
                            </div>
                        </div>
                    </div>

                    <div class="float-right bt2">
                        <button type="button" class="btn btn-outline-danger" onClick={handleClick}>Voltar para a loja</button>
                        <button type="button" class="btn btn-outline-success">Finalizar pedido</button>
                    </div>



                </div>
            </div>
        </div>

    </>);
}