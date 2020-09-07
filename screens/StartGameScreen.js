import React, { useState } from 'react'; 
import { 
    View, 
    StyleSheet, 
    Text, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        //validate input to remove anything that's not an number, using reges for only numbers, replace anything that isn't with empty space.
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>

            <View style={ styles.screen }>
                <Text style={ styles.title }>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number:</Text>
                    <Input 
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
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
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: 130,
        textAlign: 'center'
    }
});

export default StartGameScreen;