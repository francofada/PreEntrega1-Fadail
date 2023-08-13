import clasess from './ItemLisContainer.module.css'
import LogoNombre from './assets/logo-nombre.svg'
const ItemLisContainer =({greeting})=>{
    
    
    return(
        <main className={clasess.menu}>
            <h1 className={clasess.greeting}>{greeting}</h1>
            <img src={LogoNombre} width="500px"/>
        </main>
    )
}

export default ItemLisContainer