class Phrases {
    constructor(
        id, 
        phrase,
        option1,
        option2,
        optionPt,                
        optionCorrect,
        audio
      ) {
        this.id = id,
        this.phrase = phrase,
        this.option1 = option1,
        this.option2 = option2,
        this.optionPt = optionPt,        
        this.optionCorrect = optionCorrect,
        this.audio = audio
      }
  }
  
  export default Phrases;
  