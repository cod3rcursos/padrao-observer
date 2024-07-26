import Observer from './Observer'

export default interface Subject {
    registrarObserver(tipo: string, observer: Observer): void
    notificarObservers(tipo: string): void
}
