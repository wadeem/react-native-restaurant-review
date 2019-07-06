import React from 'react';
import {Text, View} from 'react-native';

const restaurants = [
    {name: 'React Cafe', address: '123 anywhere str'},
    {name: 'Awesome pizza', address: '799 main str'},
    {name: 'Taco place', address: '33 silver rd'},
];

class App extends React.Component {


    render() {

        return <View>
            <Text style={{
                padding: 40, fontSize: 30,
                color: '#0066cc', fontWeight: '300', textAlign: 'center',
            }}>Restaurant Review</Text>

            {restaurants.map((place, index) => <View key={place.name}>
                    <Text>{index + 1}</Text>
                    <Text>{place.name}</Text>
                    <Text style={{color: 'grey'}}>{place.address}</Text>
                    <Text>Info</Text>
                </View>,
            )}

        </View>;

    }

}

export default App;
