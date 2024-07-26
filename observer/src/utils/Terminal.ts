import readline from 'readline'

export default class Terminal {
    static lerTexto(mensagem: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        return new Promise((resolve) => {
            rl.question(mensagem, (resposta) => {
                rl.close()
                resolve(resposta)
            })
        })
    }

    static limparTela(): void {
        process.stdout.write('\x1Bc')
    }
}
