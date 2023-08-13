import clasess from './NavBar.module.css'
import NavImg from './assets/logo.svg'
import CartWidget from '../CartWidget/CardWidget'
const NavBar =() =>{
    
    return(
        <nav className={clasess.container}>
            <img src={NavImg} width="70px"/>
            <section>
                    <button>VIAJES</button>
                    <button>EXCURSIONES</button>
                    <button>PAQUETES</button>
            </section>
           <CartWidget/>
        </nav>
    )
}

export default NavBar