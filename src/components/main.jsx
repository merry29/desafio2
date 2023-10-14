import { useState } from "react"

function Main() {
    const [contador, setContador] = useState(0)
    const [imagens, setImagens] = useState([
        '..public/img/domingo.jpg',
        '../public/img/casal.jpg',
        '../public/img/tres.jpg',
        '../public/img/004.jpg',
        '../public/img/dra5.jpg',
        '../public/img/006.jpg',
        '../public/img/007.jpg',
        '../public/img/8caudas.jpg',
        '../public/img/009.jpg',
        '../public/img/neymar.jpg'
        
    ])
    const add = () => {
        if (contador < 10) {
            setContador((valor) => valor + 1)
        }
    }

    const retirar = () => {
        if (contador > 0) {
            setContador((valor) => valor - 1);
            
        }
    };

    
    return (
        <main style={{backgroundImage:`url('../public/img/domingo.jpg')`}}>

            <section className="sele">

            <p>{contador}</p>
            <div>
                <button onClick={add}>+</button>
                <button onClick={retirar}>–</button>
            </div>
            </section>

            
        </main>
    )
}

export default Main