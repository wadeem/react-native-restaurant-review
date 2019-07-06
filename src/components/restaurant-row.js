import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const RestaurantRow = ({place, index}) => {

    return <View key={place.name} style={
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
    </View>;

};

export default RestaurantRow;

const styles = StyleSheet.create({
    row: {flexDirection: 'row'},
    edges: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5},
    nameAddress: {flex: 8, flexDirection: 'column'},
    address: {color: 'grey'},
});
