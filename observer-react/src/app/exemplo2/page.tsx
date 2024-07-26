'use client'
import DevolverNumero from '@/components/DevolverNumero'
import { useState } from 'react'

export default function Page() {
    const [numero, setNumero] = useState(0)

    function callback(numero: number) {
        setNumero(numero)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl">{numero}</h1>
            <DevolverNumero minimo={25} maximo={100} funcaoCallback={callback} />
        </div>
    )
}
