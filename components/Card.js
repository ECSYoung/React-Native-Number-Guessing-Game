import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>

}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#f7287b',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 10
    }
});

export default Card;