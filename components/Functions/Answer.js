function CheckAnswer(){
  if (
    (currentOption === 1 && option1 === optionCorrect) ||
    (currentOption === 2 && option2 === optionCorrect)
    ){
      onOptionCorrectSelected();
  } else if (
    (currentOption === 1 && option1 != optionCorrect) ||
    (currentOption === 2 && option2 != optionCorrect)
    ) {
      Alert.alert("Resposta errada", "Tente novamente!", [
        { text: "OK", style: "cancel" },
      ]);
    }    
}

export default CheckAnswer;