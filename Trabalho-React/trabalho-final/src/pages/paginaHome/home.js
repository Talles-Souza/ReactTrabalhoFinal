import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { ProductCard } from "../../components/Card/productCard";
import { Container, Body, Cont1, Cont11, Cont12, Texto } from "./estiloHome";
import { api } from "../../Service/api";

export const Inicio = () => {


  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dataSourcePaginated, setDatasourcePaginated] = useState([]);
  const [produtos, setProdutos] = useState([])
  const mountDataSource = (data, pageNumber) => {
    const batchSlice = data?.slice(
      pageNumber === 1 ? 0 : 6 * pageNumber - 6,
      6 * pageNumber,
    );

    const copyOfData = batchSlice?.map((i) => i);

    setDatasourcePaginated(copyOfData);
  };
  const paginate = (number) => {
    setPage(number);
    mountDataSource(produtos, number);
  };

  useEffect(() => {
    const getProdutos = async () => {
      const response = await api.get(`e-commerce/produto`)
      setTotalPages(response.data?.length || 0);
      setPage(1);

      mountDataSource(response.data, 1);
      setProdutos(response.data)
    }
    getProdutos();
  }, [])






  return (<>
    <Topo />
    <Container />
    <Body>
      <Cont1>
        <Cont11><h2><Texto>Comece sua jornada na tecnologia</Texto></h2></Cont11>
        <Cont12>

          {dataSourcePaginated.map(produto => {
            return (<ProductCard produto={produto} />)
          })}


        </Cont12>
        <nav aria-label="Navegação de página exemplo">
          <Paginacao
            pageSize={6}
            total={totalPages}
            defaultCurrent={page}
            current={page}
            onChange={paginate}
            showSizeChanger={false}
          />
        </nav>
      </Cont1>

    </Body>
  </>);
}