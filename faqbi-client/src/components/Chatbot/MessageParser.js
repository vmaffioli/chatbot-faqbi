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
 
    function compare(question,key,qIn) { 
      let bool = false;
      let result = false;


      key.forEach(e =>{
        if(qIn.includes(e)){
          bool=true
        } else {
          bool=false
        }
      })
      if(bool){

        question.forEach(eachQ => {
          eachQ = eachQ.split(" ")
          let eqct = 0;

          eachQ.forEach(e => {
            if(qIn.includes(e)){
              eqct++
            }
          })
          let iQIn = qIn.split(" ")
          let calc = 70 / 100 * iQIn.length

          if(eqct>=iQIn.length){
            result=true
          }
          

        })

        
      }

      return result;
    }



    if (config.step === "presentation_init") {
      this.actionProvider.presentation(isaName.check(msg), isaName.filter(msg).toString());
    } else if (config.step === "form_init") {

      if (compare(questions.aboutMe('content'),questions.aboutMe('key'),message)) {
        this.actionProvider.q01(message);
        if(config.b1===false){
          config.b1 = true
          config.ansCount++
        }
        if (config.ansCount === 5){
          this.actionProvider.all(message);
          config.ansCount++
        }
      } else if (compare(questions.pontoForte('content'),questions.pontoForte('key'),message)) {
        this.actionProvider.q02(message);
        if(config.b2===false){
          config.b2 = true

          config.ansCount++
        }
        if (config.ansCount === 5){
          this.actionProvider.all(message);
          config.ansCount++
        }
      } else if (compare(questions.pontoFraco('content'),questions.pontoFraco('key'),message)) {
        this.actionProvider.q03(message);
        if(config.b3===false){
          config.b3 = true

          config.ansCount++
        }
        if (config.ansCount === 5){
          this.actionProvider.all(message);
          config.ansCount++
        }
      } else if (compare(questions.pretensaoSalarial('content'),questions.pretensaoSalarial('key'),message)) {
        this.actionProvider.q04(message);
        if(config.b4===false){
          config.b4 = true

          config.ansCount++
        }
        if (config.ansCount === 5){
          this.actionProvider.all(message);
          config.ansCount++
        }
      } else if (compare(questions.cincoAnos('content'),questions.cincoAnos('key'),message)) {
        this.actionProvider.q05(message);
        console.log(config.ansCount)
        if(config.b5===false){
          config.b5 = true
          config.ansCount++
        }
        if (config.ansCount === 5){
          this.actionProvider.all(message);
          config.ansCount++
        }
      }  
    } 
      
    
    
  }
}

export default MessageParser;