import './produto.css'
export default function Produto(props) {

    // function ShowInfo(event) {
    //     const target = event.currentTarget;
    //     const element = target.getElementsByTagName("figcaption")[0];
    //     element.style.visibility = "initial";
    // }
    // function HiddenInfo(event) {
    //     const target = event.currentTarget;
    //     const element = target.getElementsByTagName("figcaption")[0];
    //     element.style.visibility = "hidden";
    // }
    return (


        <figure className={props.categoria + " produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto box-produtos"} id={props.categoria} key={props.idprodutos} >
            <img src={require(`.${props.imagem}`).default} alt="Imagem de Produtos" className='pictureProduct' />
            <figcaption>
                <p className="nome-prod nomeJogo">
                    {props.nome}
                </p>
                <p className="precofinal-prod priceFrom">
                    R$ {props.precoAnterior}
                </p>
                <p className="precofinal-prod priceTo">
                    R$ {props.precoFinal}
                </p>
            </figcaption>
        </figure>

    )
}

