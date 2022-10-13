function CheckAnswer(currentOption, option1, option2){
  if (
    (currentOption === 1 && option1 === optionCorrect) ||
    (currentOption === 2 && option2 === optionCorrect)
    ){
      return true;
  } else if (
    (currentOption === 1 && option1 != optionCorrect) ||
    (currentOption === 2 && option2 != optionCorrect)
    ) {
      Alert.alert("Resposta errada", "Tente novamente!", [
        { text: "OK", style: "cancel" },
      ]);
      return false;
    }    
}

export default CheckAnswer;