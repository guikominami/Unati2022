class Vocabulary {
  constructor(
    id, 
    options,
    option1,
    option2,
    optionPt,
    optionCorrect,
    image,
    audio
  ) {
    this.id = id,
    this.options = options,
    this.option1 = option1,
    this.option2 = option2,
    this.optionPt = optionPt,
    this.optionCorrect = optionCorrect,
    this.image = image,
    this.audio = audio
  }
}

export default Vocabulary;