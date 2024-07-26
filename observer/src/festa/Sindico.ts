import Observer from '../padrao/Observer'

export default class Sindico implements Observer {
    eventoOcorreu(): void {
        console.log('Síndico: Se fizer bagunça, vai ter que limpar tudo!')
        console.log('Síndico: Se fizer barulho, vai ter que pagar multa!')
        console.log('Síndico: Se fizer algo errado, vai ter que sair!')
    }
}
