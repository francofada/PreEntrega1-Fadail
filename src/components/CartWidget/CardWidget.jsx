import CartImg from './assets/carro1.svg'
const CartWidget = () =>{
    return(
        <button>
            <img src={CartImg} width="40px"/>
            0
        </button>
    )
}

export default CartWidget