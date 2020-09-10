import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The Game Is Over! </TitleText>
      <View style={styles.imageContainer}>
        <Image 
            source={{uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33790286.jpg'}} 
            // source={require("../assets/success.png")} 
            style={styles.image} 
            resizeMode='cover' 
            />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
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
  }
});

export default GameOverScreen;
