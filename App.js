import React from 'react';
import {StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import Header from './src/components/header.js';
import RestaurantRow from './src/components/restaurant-row.js';

const restaurants = [
    {name: 'React Cafe', address: '123 anywhere str'},
    {name: 'Awesome pizza', address: '799 main str'},
    {name: 'Taco place', address: '33 silver rd'},
    {name: 'Burger prince', address: '123 happy rd'},
    {name: 'BBQ friends', address: '78 big str'},
    {name: 'Fancy salads', address: '11 eastern road'},
    {name: 'Yozu', address: '32 bamboo road'},
    {name: 'Juicy breakfast', address: '1st major avenue'},
];

class App extends React.Component {

    state = {
        search: null,
    };

    render() {
        console.log('search', this.state.search);

        return <View style={{flex: 1}}>

            <Header/>

            <TextInput style={styles.input}
                       placeholder="Live Search"
                       onChangeText={text => {
                           this.setState({search: text});
                       }}
                       value={this.state.search}
            />

            <FlatList

                data={restaurants.filter(place => !this.state.search ||
                    place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)}

                renderItem={({item, index}) => <RestaurantRow index={index} place={item}/>}

                keyExtractor={item => item.name}

                initialNumToRender={1}

            />


        </View>;

    }

}

export default App;

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderColor: '#ddd',
        borderBottomWidth: 1,
    },
});
