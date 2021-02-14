
function randomize(array) {
    let rand = Math.floor(Math.random() * array.length);

    if (rand === array.length) { rand = 0 };
    return array[rand]
};



const messages = {
    default: () => { //example 
        let msg = [
            ""
        ]
        return randomize(msg);
    },
    default2: (param) => { // example with name
        let msg
        if (param === "$$IsaFalse%%") {
            let msgWithoutName = []
            msg = msgWithoutName
        } else {
            let msgWithName = []
            msg = msgWithName
        }
        return randomize(msg)
    },
    presentation_init: () => {
        let msg = [
            "Olá! Me chamo Vinibot e estou aqui para responder as perguntas mais frequentes durante entrevistas de emprego.",
            "Oi, tudo bem? Eu sou o Vinibot e estou aqui para ajuda-lo(a), fui programado para responder as perguntas mais comuns em entrevistas de emprego.",
            "Olá, tudo bem com você? Meu nome é Vinibot e sou encarregado de responder perguntas comuns durante entrevistas de emprego. "
        ]
        return randomize(msg);
    },
    askName_init: () => {
        let msg = [
            "Qual é o seu nome ?",
            "Como você se chama?",
            "Poderia me dizer seu nome?"
        ]
        return randomize(msg);
    },
    askName_finish: (param) => {
        let msg

        if (param === "$$IsaFalse%%") {
            let msgWithoutName = [
                "Muito prazer em te conhecer!",
                "É um prazer te conhecer!",
                "É um imenso prazer te conhecer!",
            ]
            msg = msgWithoutName
        } else {
            let msgWithName = [
                "Muito prazer em te conhecer " + param + "!",
                "É um prazer te conhecer, " + param + "!",
                "É um imenso prazer te conhecer, " + param + "!",
            ]
            msg = msgWithName
        }

        return randomize(msg);
    },
    presentation_finish: (param) => {
        let msg
        if (param === "$$IsaFalse%%") {
            let msgWithoutName = [
                "O que deseja perguntar?",
                "O que você gostaria de perguntar?",
                "Vamos começar? qual a sua primeira pergunta?"
            ]
            msg = msgWithoutName
        } else {
            let msgWithName = [
                param + ", o que deseja perguntar?",
                "O que você gostaria de perguntar, " + param + "?",
                "Vamos começar? qual a sua primeira pergunta, " + param + "?"
            ]
            msg = msgWithName
        }
        return randomize(msg);
    },
    dont_know: () => {
        let msg = [
            "Eu não conheço essa pergunta, me desculpa! Prometo que vou aprender a responder em breve!"
        ]
        return randomize(msg);
    },
    q01_1: (param) => { //sobre
        let msg = [
            "Me chamo Vinícius, tenho 27 anos e possuo 2 anos de experiência com programação em geral."
        ]
        return randomize(msg);
    },
    q01_2: (param) => {
        let msg = [
            "Desses 2 anos, tenho como experiência profissional 1 ano de estágio em desenvolvimento Java/Sql pela BRQ."
        ]
        return randomize(msg);
    },
    q01_3: (param) => {
        let msg = [
            "Amo programar, sou autodidata e possuo um plano de estudos diário, onde atualmente me dedico a javascript (Node,react e bancos noSQL como Firebase) ."
        ]
        return randomize(msg);
    },
    q02_1: (param) => { //forte
        let msg = [
            "Minha persistência, não desisto de resolver ou enfrentar situações desafiadoras"
        ]
        return randomize(msg);
    },
    q02_2: (param) => { //forte
        let msg = [
            "Seja um bug, algum aprendizado complexo ou situação que exijam mudanças repentinas."
        ]
        return randomize(msg);
    },
    q03_1: (param) => { //fraco
        let msg = [
            "Ansiedade"
        ]
        return randomize(msg);
    },
    q03_2: (param) => { //fraco
        let msg = [
            "Eu me cobro muito e as vezes preciso lidar com as frustrações, é um ponto que estou trabalhando."
        ]
        return randomize(msg);
    },
    q04_1: (param) => { //pretensao
        let msg = [
            "Minha pretensão é de 2500"
        ]
        return randomize(msg);
    },
    q04_2: (param) => { //pretensao
        let msg = [
            "Porém estou totalmente aberto a negociações."
        ]
        return randomize(msg);
    },
    q05_1: (param) => { //5anos
        let msg = [
            "hmm..daqui cinco anos?"
        ]
        return randomize(msg);
    },
    q05_2: (param) => { //5anos
        let msg = [
            "Quero estar a frente de projetos e ideias inovadoras"
        ]
        return randomize(msg);
    },
    q05_3: (param) => { //5anos
        let msg = [
            "vou carregar comigo a vontade de aprender e continuar avançando para ter autonomia de criação."
        ]
        return randomize(msg);
    },
    all_1: () => {
        let msg = [
            "Olha que bacana, já respondi todas perguntas que eu conheço! o/",
            "Ual! Consegui responder as perguntas que eu conheço, parabéns para mim.",
            "Hey, já respondi todas as perguntas que eu conheço, olha que bacana!!"

        ]
        return randomize(msg);
    },
    all_2: (param) => {
        let msg
        if (param === "$$IsaFalse%%") {
            let msgWithoutName = [
                param + ", caso queira perguntar novamente alguma coisa estou a disposição",
                param + ", se precisar perguntar novamente algo é só me dizer",
                param + ", mas se ainda quiser perguntar algo de novo, estou a disposição"
            ]
            msg = msgWithoutName
        } else {
            let msgWithName = [
                param + ", caso queira perguntar novamente alguma coisa estou a disposição",
                param + ", se precisar perguntar novamente algo é só me dizer",
                param + ", mas se ainda quiser perguntar algo de novo, estou a disposição"
            ]
            msg = msgWithName
        }
        return randomize(msg);
    },



}

export default messages;