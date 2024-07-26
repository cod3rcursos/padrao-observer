import Observer from '../padrao/Observer'
import Subject from '../padrao/Subject'
import Terminal from '../utils/Terminal'

export default class Porteiro implements Subject {
    private readonly observadores: Map<string, Observer[]> = new Map()

    registrarObserver(tipo: string, observer: Observer): void {
        if (!this.observadores.has(tipo)) {
            this.observadores.set(tipo, [])
        }
        this.observadores.get(tipo)?.push(observer)
    }

    notificarObservers(tipo: string): void {
        if (!this.observadores.has(tipo)) {
            return
        }

        const observers = this.observadores.get(tipo)
        observers?.forEach((observer) => {
            observer.eventoOcorreu()
        })
    }

    async monitorar(): Promise<void> {
        Terminal.limparTela()
        let evento = ''

        while (evento !== 'sair') {
            console.log('Porteiro: Monitorando...')
            evento = await Terminal.lerTexto('Digite o tipo de evento (ou "sair"): ')
            Terminal.limparTela()
            this.notificarObservers(evento)
        }
    }
}
