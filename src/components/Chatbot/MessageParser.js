import isaName from 'isa-know-name';
import config from './config';
import questions from './questions';

// MessageParser starter code


class MessageParser {

  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;

  }


  parse(message) {
    const msg = message.toLowerCase();

    function validateCounter(param) {
      let validationCounter = false
      
      config.ansHist.forEach(e => {
        if (e === param) {
          validationCounter = true
        }
      });
      if (!validationCounter) {
        config.ansCount++
      }
      if (config.ansCount === (config.totalQuestions * 1000)) { //retirar
        this.actionProvider.all(message);
        config.ansCount++
      }
      //console.log(config.ansCount)
      config.ansHist.push(param)
    }

    if (config.step === "presentation_init") {
      this.actionProvider.presentation(isaName.check(msg), isaName.filter(msg).toString());
    } else if (config.step === "form_init") {

      if (questions.compare(questions.aboutMe('content'), questions.aboutMe('key'), message)) {
        this.actionProvider.q01(message);

        validateCounter("aboutMe")

      } else if (questions.compare(questions.pontoForte('content'), questions.pontoForte('key'), message)) {
        this.actionProvider.q02(message);

        validateCounter("pontoForte")

      } else if (questions.compare(questions.pontoFraco('content'), questions.pontoFraco('key'), message)) {
        this.actionProvider.q03(message);

        validateCounter("pontoFraco")

      } else if (questions.compare(questions.pretensaoSalarial('content'), questions.pretensaoSalarial('key'), message)) {
        this.actionProvider.q04(message);

        validateCounter("pretensaoSalarial")

      } else if (questions.compare(questions.cincoAnos('content'), questions.cincoAnos('key'), message)) {
        this.actionProvider.q05(message);

        validateCounter("cincoAnos")

      } else if (questions.compare(questions.habilidadesTecnicas('content'), questions.habilidadesTecnicas('key'), message)) {
        this.actionProvider.q06(message);

        validateCounter("habilidadesTecnicas")

      } else {
        this.actionProvider.dont_know();
      }
    }



  }
}

export default MessageParser;