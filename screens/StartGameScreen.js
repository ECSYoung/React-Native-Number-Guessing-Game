import React, { useState } from 'react'; 
import { 
    View, 
    StyleSheet, 
    Text, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        //validate input to remove anything that's not an number, using reges for only numbers, replace anything that isn't with empty space.
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be a number between 1 and 99.', 
                [{ 
                    text: 'Okay', 
                    style: 'destructive', 
                    onPress: resetInputHandler 
                }])
            return;
        }

        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue)); //entire the enteredValue is set as an interger
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
    confirmedOutput = (
        <Card style={styles.summaryContainer} >
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
        </Card>
        )
    }

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
                        <View style={styles.buttons}>
                            <Button 
                                title="Reset" 
                                style={styles.buttons}
                                color={Colors.primary}
                                onPress={resetInputHandler}
                                accessibilityLabel= "button to reset the text input field" 
                            />
                        </View>
                        <View style={styles.buttons}>
                            <Button 
                                title="Confirm" 
                                color={Colors.accent}
                                onPress={confirmInputHandler}
                                accessibilityLabel= "button to reset the text input field"
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttons: {
        width: 100,
        minWidth: 100,
        borderRadius: 10
    },
    input: {
        width: 130,
        textAlign: 'center'
    },
    summaryContainer: {
        margin: 20,
        paddingHorizontal: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;