'use client'

import { useState } from 'react'

export default function Page() {
    const [exibir, setExibir] = useState(true)

    function esconder() {
        setExibir(false)
    }

    function mostrar() {
        setExibir(true)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {exibir && <h1 className="text-2xl">Esse é o TEXTO</h1>}
            <div className="flex gap-5">
                <button className="bg-green-500 p-2 rounded-md" onClick={mostrar}>
                    Mostrar
                </button>
                <button className="bg-yellow-500 p-2 rounded-md" onClick={esconder}>
                    Esconder
                </button>
            </div>
        </div>
    )
}
