import React, { Component }from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class TripDetail extends Component {

  constructor(props){
    super(props);
  }

  navigateUser = () => {
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    opacity: .7,
    backgroundColor: 'white',
    marginTop: 4,
    marginBottom: 4,
    width: 300,
    justifyContent: 'center',
  }
};

export default TripDetail;
