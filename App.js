import React from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import Header from './src/components/header.js';

const restaurants = [
    {name: 'React Cafe', address: '123 anywhere str'},
    {name: 'Awesome pizza', address: '799 main str'},
    {name: 'Taco place', address: '33 silver rd'},
    {name: 'Burger prince', address: '123 happy rd'},
    {name: 'BBQ friends', address: '78 big str'},
    {name:"Fancy salads",address:"11 eastern road"},
    {name:"Yozu",address:"32 bamboo road"}
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

            <ScrollView contentContainerStyle={{paddingTop:30}}>
                {restaurants.filter(place => !this.state.search ||
                    place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
                    .map((place, index) =>

                        <View key={place.name} style={
                            [styles.row, {backgroundColor: index % 2 === 0 ? 'white' : '#f3f3f7'}]
                        }>

                            <View style={styles.edges}>
                                <Text>{index + 1}</Text>
                            </View>
                            <View style={styles.nameAddress}>
                                <Text>{place.name}</Text>
                                <Text style={styles.address}>{place.address}</Text>
                            </View>
                            <View style={styles.edges}>
                                <Text>Info</Text>
                            </View>
                        </View>,
                    )}
            </ScrollView>
        </View>;

    }

}

export default App;

const styles = StyleSheet.create({
    row: {flexDirection: 'row'},
    edges: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5},
    nameAddress: {flex: 8, flexDirection: 'column'},
    address: {color: 'grey'},
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
