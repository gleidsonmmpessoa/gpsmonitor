import { useState } from "react"

function Home() {
    return <div>
        <h1>Home Teste</h1>
        <Contador />
    </div>
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adcionarContador() {
            setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adcionarContador}>Adcionar</button>
        </div>
    )
}

export default Home