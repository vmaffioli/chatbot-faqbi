

function send(request,qContent,qKey){
    let result;
    if(request==="content"){
        result=qContent
    } else if(request==="key"){
        result=qKey
    }            
    return result;
}

const questions = {
    default: (request) => {
        let qContent = []
        let qKey = []
        return send(request,qContent,qKey)
    },
    aboutMe: (request) => {
        let result;
        let qContent = [
            "me conte sobre voc",
            "gostaria de saber sobre voc",
            "me fale um pouco sobre voc",
            "me fale sobre voc",
            "me conta um pouco sobre de voce",
            "fale sobre voc",
            "conte sobre voc",
            "quero saber sobre voc",
            "gostaria de saber sobre voc",

        ]
        let qKey = [
            "sobre",
            "voc"
        ]
        return send(request,qContent,qKey)
    },
    pontoForte: (request) => {
        let qContent = [
            "qual seu ponto forte ?",
            "qual é o seu ponto forte ?",
            "qual você considera seu ponto forte ?",
            "para você, qual é o seu ponto forte ?",
            "gostaria de saber seu ponto forte",
            "qual caracteristica você considera seu ponto forte ?",
            "me diz qual é o seu ponto forte ?",
            "e o seu ponto forte ?",
            "agora seu ponto forte"
        ]
        let qKey = [
            "ponto",
            "forte"
        ]
        return send(request,qContent,qKey)
    },
    pontoFraco: (request) => {
        let qContent = [
            "qual seu ponto fraco ?",
            "qual é o seu ponto fraco ?",
            "qual você considera seu ponto fraco ?",
            "para você, qual é o seu ponto fraco ?",
            "gostaria de saber seu ponto fraco ?",
            "qual caracteristica você considera seu ponto fraco ?",
            "me diz qual é o seu ponto fraco ?",
            "e o seu ponto fraco ?",
            "agora o seu ponto fraco ?"
        ]
        let qKey = [
            "ponto",
            "fraco"
        ]
        return send(request,qContent,qKey)
    },
    pretensaoSalarial: (request) => {
        let qContent = [
            "qual a sua pretensão salarial ?",
            "gostaria de saber sua pretensão salarial ?",
            "me informe sua pretensão salarial",
            "qual a sua pretensão salarial ? receber pagamento",
        ]
        let qKey = [
            "pretensão",
            "salarial"
        ]
        return send(request,qContent,qKey)
    },
    cincoAnos: (request) => {
        let qContent = [
            "onde você se vê daqui cinco anos ? 5",
            "como você se vê daqui a cinco anos ? 5",
            "como você quer se ver daqui a cinco anos? 5",
            "onde você quer estar daqui cinco anos? 5",
            "como você quer ser daqui cinco anos ? 5",
            "onde você quer estar daqui a cinco anos ?",
            "comoe você quer estar daqui a cinco anos ?"

        ]
        let qKey = [
            "cinco5",
            "anos"
        ]
        return send(request,qContent,qKey)
    },

}

export default questions;