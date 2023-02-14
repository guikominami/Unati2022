class Vocabulary {
  constructor(
    id, 
    option1,
    option2,
    optionPt,
    optionCorrect,
    image,
    audio,
    desafio1,
    desafio2,
    desafio3
  ) {
    this.id = id,
    this.option1 = option1,
    this.option2 = option2,
    this.optionPt = optionPt,
    this.optionCorrect = optionCorrect,
    this.image = image,
    this.audio = audio,
    this.desafio1 = desafio1,
    this.desafio2 = desafio2,
    this.desafio3 = desafio3
  }
}

export default Vocabulary;