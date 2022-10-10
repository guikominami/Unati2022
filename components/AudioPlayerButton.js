import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import Colors from '../constants/colors';
import { Audio } from 'expo-av';

function AudioPlayerButton({ audio }){

  const [sound, setSound] = React.useState();

/*   var audioIsPlayed = false;

  console.log(audioIsPlayed);
  if(!audioIsPlayed){
    playSound();
    audioIsPlayed = true;          
  } */

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;      
  }, [sound]);

  return(
    <View style={styles.iconContainer}>
      <Entypo name="sound" size={32} color={Colors.primary600} onPress={playSound} />
    </View>    
  );
}

export default AudioPlayerButton;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
})
