import { Form, Button, Row } from 'react-bootstrap';
import React, { useState, useEffect, lazy, Suspense } from 'react';
const Pedidos = lazy(() => import('../../Componentes/Pedidos/Pedidos'));
export default function Formulario() {



    const [pedidos, setPedidos] = useState([])
    const [form, setForm] = React.useState({
        nome: "",
        quantidade: "",
        idproduto: "",
        email: "",
        telefone: ""
    })
    const [response, setResponse] = React.useState(null)
    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ ...form, [id]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:5000/Formulario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((resposta) => {
            setResponse(resposta);
        })

    }

    useEffect(() => {
        async function atualizarPedido() {
            const url = "http://localhost:5000/Formulario";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
            console.log(resultado)
        }

        atualizarPedido();
    }, [])
    return (

        <Row>
            <div className='container container-fluid formulario'>
                <div className="col lg-6 mx-auto">
                    {/* <Form onSubmit={envioPedido} > */}

                    <Form onSubmit={handleSubmit} >
                        <h2 className='titulo-formulario'>Pedido</h2>
                        <Form.Group>
                            <Form.Label>Nome </Form.Label>
                            <Form.Control type="text" id="nome" name="nome"
                                value={form.nome}
                                onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" id="email" name="email"
                                value={form.email} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="number" id="telefone" name="telefone"
                                value={form.telefone}
                                onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Produto</Form.Label>
                            <Form.Control id='idproduto' name="idproduto" as="select"
                                value={form.idproduto}
                                onChange={handleChange}>
                                <option value='1 '>The Witcher 3 - Wild Hunt</option>
                                <option value='2' >Final Fantasy VII - Remake</option>
                                <option value='3'>Persona 5</option>
                                <option value='4'>Wolfenstein 2 - The New Colossus</option>
                                <option value='5'>Battlefield 5</option>
                                <option value='6'>Call of Duty - Modern Warfare</option>
                                <option value='7'>Need For Speed - Heat</option>
                                <option value='8'>Gran Turismo Sport</option>
                                <option value='9'>Sonic Team Racing</option>
                                <option value='10'>Horizon Zero Dawn - Complete Edition</option>
                                <option value='11'>God Of War</option>
                                <option value='12'>Tomb Raider - Definitive Edition</option>
                                <option value='13'>Injustice 2 - Legendary Edition</option>
                                <option value='14'>Mortal Kombat 11 - Aftermath</option>
                                <option value='15'>Samurai Shodown</option>


                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantidade </Form.Label>
                            <Form.Control type="number" id="quantidade" name="quantidade"
                                value={form.quantidade}
                                onChange={handleChange}></Form.Control>
                        </Form.Group>


                        <Button variant='success' type='submit'>Enviar</Button>
                    </Form>

                </div>
                <Suspense fallback={<h2 className='text-center'>Carregando pedidos</h2>}>
                    <div className="row">
                        <table className="table table-striped mt-4 text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">ID Produto</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>

                                {pedidos && pedidos.map(pedido => <Pedidos idpedido={pedido.idpedido} nome={pedido.nome} produto={pedido.idproduto} telefone={pedido.telefone} quantidade={pedido.quantidade} />)}
                                {response && response.ok && alert("Pedido enviado")}

                            </tbody>
                        </table>
                    </div>
                </Suspense>
            </div>

        </Row >

    )


}