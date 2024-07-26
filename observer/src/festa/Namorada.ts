import Observer from '../padrao/Observer'

export default class Namorada implements Observer {
    eventoOcorreu(): void {
        console.log('Namorada: Todas as luzes foram apagadas')
        console.log('Namorada: Todos os convidados ficaram em silêncio')
        console.log('Namorada: A porta está abrindo...')
        console.log('Namorada: Surpresa!!!')
    }
}
