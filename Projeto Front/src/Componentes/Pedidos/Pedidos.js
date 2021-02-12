import { useState } from 'react'
export default function Pedidos(props) {


    function deletar(target) {
        target.preventDefault()
        alert('Produto deletado')
    }
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.produto}</td>
            <td>{props.telefone}</td>
            <td>{props.quantidade}</td>
            <button className='btn btn-danger' id={props.idpedido} value={props.idproduto} onClick={deletar}>Deletar</button>
        </tr>
    )


}