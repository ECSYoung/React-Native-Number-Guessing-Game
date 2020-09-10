import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from '../constants/colors';


const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The Game Is Over! </TitleText>
      <View style={styles.imageContainer}>
        <Image 
            fadeDuration={1000}
            source={{uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33790286.jpg'}} 
            // source={require("../assets/success.png")} 
            style={styles.image} 
            resizeMode='cover' 
            />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.resultText}>Your Phone Needed <Text style={styles.highlight}>{props.roundsNumber}</Text> of Rounds, to guess the number: <Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
      </View>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
      borderRadius: 150,
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30 
  },
  highlight: {
      color: Colors.accent,
      fontFamily: 'open-sans-bold'
  },
  textContainer: {
      width: '80%',
      marginVertical: 15
  },
  resultText: {
      textAlign: 'center',
      fontSize: 20
  }
});

export default GameOverScreen;
