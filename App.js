import React from 'react';
import {Text, View} from 'react-native';

const restaurants = [
    {name: 'React Cafe', address: '123 anywhere str'},
    {name: 'Awesome pizza', address: '799 main str'},
    {name: 'Taco place', address: '33 silver rd'},
];

class App extends React.Component {


    render() {

        return <View style={{flex: 1}}>
            <Text style={{
                padding: 40, fontSize: 30,
                color: '#0066cc', fontWeight: '300', textAlign: 'center',
            }}>Restaurant Review</Text>

            {restaurants.map((place, index) =>
                <View key={place.name} style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>{index + 1}</Text>
                    </View>
                    <View style={{flex: 8, flexDirection: 'column'}}>
                        <Text>{place.name}</Text>
                        <Text style={{color: 'grey'}}>{place.address}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Info</Text>
                    </View>
                </View>,
            )}

        </View>;

    }

}

export default App;
