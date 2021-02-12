import { Container } from 'react-bootstrap'
import { lazy, Suspense } from 'react'
import '../App.css'
const Loja = lazy(() => import('../Componentes/Lojas/Lojas'))
export default function Lojas() {

    return (

        <Suspense fallback={<h2 className='carregando'>Carregando...</h2>}>
            <Container fluid className='d-flex jumbotron jumbotron-fluid'>

                <Loja />

            </Container>
        </Suspense>
    )
}