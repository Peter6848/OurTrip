import React, { Component }from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class TripDetail extends Component {

  constructor(props){
    super(props)

    this.navigateUser = this.navigateUser.bind(this)
  }

  navigateUser(){
    Actions.TripShow({accessToken: this.props.accessToken})
  }

render(){
  return (
    <Button onPress={this.navigateUser} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{this.props.trip.name}</Text>
    </Button>
  );
};
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    opacity: .7,
    alignSelf: 'stretch',
    backgroundColor: 'beige',
    marginTop: 4,
    marginBottom: 4
  }
};

export default TripDetail;
