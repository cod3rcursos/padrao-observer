import Namorada from './festa/Namorada'
import Porteiro from './festa/Porteiro'
import Sindico from './festa/Sindico'

// Observadores -> Interessados em saber sobre o evento
const namorada = new Namorada()
const sindico = new Sindico()

// Subject -> Quem está monitorando o evento (loop)
const porteiro = new Porteiro()

// Registrar observadores
porteiro.registrarObserver('chegada-tiago', namorada)
porteiro.registrarObserver('chegada-tiago', sindico)

// Loop para monitorar os eventos
porteiro.monitorar()
