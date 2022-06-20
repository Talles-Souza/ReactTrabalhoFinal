import React, { createContext, useState } from 'react';


const CartItensContext = createContext(null);
const CartContext = createContext(null);

const CartItensProvider = (props) => {
    const [cartItens, setCartItens] = useState([]);


    function addItem(produto) {
        console.log(produto, cartItens);
        setCartItens([...cartItens, produto])
    }

    return (
        <CartItensContext.Provider
            value={{ cartItens }}
        >
            <CartContext.Provider value={{ addItem }}>
                {props.children}
            </CartContext.Provider>
        </CartItensContext.Provider>
    );
};

export { CartItensContext, CartItensProvider, CartContext };


//export const DataContext = createContext(null)



// export function Contexto (props) {

//     const [nome, setNome] = useState(estadoContexto.nome)

//     function handleSetNome(e){
//         setNome(e.target.value)
//         console.log("Entrou");
//     }

//     return(
//         <DataContext.Provider value={{nome, handleSetNome}}>
//             {props.children}
//         </DataContext.Provider>
//     )

//}