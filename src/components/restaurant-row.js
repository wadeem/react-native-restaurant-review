import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

class RestaurantRow extends React.Component {

    state = {
        showInfo: false,
    };

    infoPressed = () => {
        this.setState({showInfo: !this.state.showInfo});
    };

    render() {
        const {place, index} = this.props;

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

                <TouchableHighlight onPress={this.infoPressed}
                                    style={styles.button}
                                    underlayColor="#5398dc">
                    <Text style={styles.buttonText}>Info</Text>
                </TouchableHighlight>

            </View>

            {
                this.state.showInfo && <View><Text>Extra info</Text></View>
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
});
