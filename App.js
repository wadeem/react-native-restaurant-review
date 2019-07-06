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
            <Text style={styles.header}>Restaurant Review</Text>

            {restaurants.map((place, index) =>
                <View key={place.name} style={styles.row}>
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

        </View>;

    }

}

export default App;

const styles = {

    header: {
        padding: 40, fontSize: 30,
        color: '#0066cc', fontWeight: '300', textAlign: 'center',
    },
    row: {flexDirection: 'row'},
    edges: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    nameAddress: {flex: 8, flexDirection: 'column'},
    address: {color: 'grey'},
};
