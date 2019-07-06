import React from 'react';
import {StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import Header from './src/components/header.js';
import RestaurantRow from './src/components/restaurant-row.js';
import axios from "axios";

class App extends React.Component {

    state = {
        search: null,
        restaurants: [],
    };

    componentDidMount() {
        axios.get('http://192.168.1.171:3000/restaurants')
            .then(result => this.setState({restaurants: result.data}));
    }

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

                data={this.state.restaurants.filter(place => !this.state.search ||
                    place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)}

                renderItem={({item, index}) => <RestaurantRow index={index} place={item}/>}

                keyExtractor={item => item.name}

                initialNumToRender={10}

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
