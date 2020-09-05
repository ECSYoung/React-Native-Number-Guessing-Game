import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';


const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number:</Text>
                <TextInput  />
                <View style={ styles.buttonContainer }>
                    <Button 
                        title="Reset" 
                        style={styles.button}
                        color={Colors.primary}
                        // onPress={() => {}}
                        accessibilityLabel= "button to reset the text input field" 
                    />
                    <Button 
                        title="Confirm" 
                        style={styles.button}
                        color={Colors.accent}
                        // onPress={() => {}}
                        accessibilityLabel= "button to reset the text input field"
                    />
                </View>
            </Card>
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
        borderWidth: 2,
        borderColor: '#f7287b'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default StartGameScreen;