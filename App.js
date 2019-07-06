import React from 'react';
import {Text, View} from 'react-native';

class App extends React.Component {

    render() {

        return <View>
            <Text style={{
                padding: 40, fontSize: 30,
                color: '#0066cc', fontWeight: '300', textAlign: 'center',
            }}>Restaurant Review</Text>

            <Text>React Cafe</Text>
            <Text style={{color: 'grey'}}>123 anywhere str</Text>
            <Text>Awesome pizza</Text>
            <Text style={{color: 'grey'}}>23 main bld</Text>
        </View>;

    }

}

export default App;
