import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import React from 'react';
import Stars from './stars.js';

class RestaurantRow extends React.Component {

    state = {
        showInfo: false,
    };

    infoPressed = () => {
        this.setState({showInfo: !this.state.showInfo});
    };

    render() {
        const {place, index} = this.props;

        console.log('place.image', place.image);

        return <View key={place.name} style={
            {backgroundColor: index % 2 === 0 ? 'white' : '#f3f3f7'}
        }>
            <View style={styles.row}>

                <View style={styles.stars}>
                    <Stars rating={place.rating} />
                </View>

                <View style={styles.nameAddress}>
                    <Text>{place.name}</Text>
                    <Text style={styles.address}>{place.address}</Text>
                </View>

                <View style={styles.edges}>

                    <TouchableHighlight onPress={this.infoPressed}
                                        style={styles.button}
                                        underlayColor="#5398dc">

                        <Text style={styles.buttonText}>Info</Text>
                    </TouchableHighlight>

                </View>
            </View>
            {
                this.state.showInfo &&
                <View style={styles.info}>
                    <Text>Restaurant info</Text>
                    <Image source={{uri: `http://192.168.1.171:3000/images/${place.image}`}}
                           style={{
                               flex: 1,
                               height: 100,
                           }}
                           resizeMode="contain"
                    />
                </View>
            }

        </View>;
    }
};

export default RestaurantRow;


const styles = StyleSheet.create({
    row: {flexDirection: 'row'},
    edges: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        minWidth: 50,
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50,
    },
    nameAddress: {flex: 8, flexDirection: 'column'},
    address: {color: 'grey'},
    button: {
        borderWidth: 1,
        borderColor: '#0066cc',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 12,
        color: '#0066cc',
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
});
