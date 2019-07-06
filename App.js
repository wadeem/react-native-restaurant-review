import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Restaurant review</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    welcome: {fontSize: 20, textAlign: 'center', backgroundColor: '#f5fcff'},
    container: {flex: 1, justifyContent: 'center', margin: 10},

    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
