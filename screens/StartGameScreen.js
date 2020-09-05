import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number:</Text>
                <TextInput  />
                <View style={ styles.buttonContainer }>
                    <Button 
                        title="Reset" 
                        // onPress={() => {}}
                        accessibilityLabel= "button to reset the text input field" 
                    />
                    <Button 
                        title="Confirm" 
                        // onPress={() => {}}
                        accessibilityLabel= "button to reset the text input field"
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    }, 
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#f7287b',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;