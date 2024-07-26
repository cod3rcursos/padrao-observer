interface DevolverNumeroProps {
    minimo: number
    maximo: number
    funcaoCallback: (numero: number) => void
}

export default function DevolverNumero(props: DevolverNumeroProps) {
    function gerarEntreDoisNumeros() {
        const { minimo, maximo } = props
        const resultado = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
        props.funcaoCallback(resultado)
    }

    return (
        <div className="flex flex-col">
            <span className="text-2xl">{props.minimo}</span>
            <span className="text-2xl">{props.maximo}</span>
            <button onClick={gerarEntreDoisNumeros} className="bg-yellow-500 p-2 rounded-md">
                Gerar número
            </button>
        </div>
    )
}
