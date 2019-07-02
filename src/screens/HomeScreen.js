/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { dummyAction } from '../redux/actions/dummyAction';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.dispatch(dummyAction('Texxt'));
            this.props.navigation.navigate('Details');
          }}
        />
      </View>
    );
  }
}

export default connect(({ dispatch }) => ({ dispatch }))(HomeScreen);
