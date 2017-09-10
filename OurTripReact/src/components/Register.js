import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'Enter your username',
      email: 'Enter your email',
      password: 'Enter your password',
    }

    this.registerUser = this.registerUser.bind(this)
    this.findUser = this.findUser.bind(this)
  }

  findUser(){
    axios.get("https://make-it-happen-api.herokuapp.com/api/verify", {
      params: {
        email: this.state.email
      }
    })
    .then((response)=> {
      if(response.data.found) {
          Alert.alert(
          'Email already exists',
          '',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}]
        )
      } else {
        this.registerUser()
      }
    })
    .catch(function (error) {

    });
  }

  registerUser(){
    this.props.createUser(this.state.username, this.state.email, this.state.password)
  }

  render() {
  return (
    <Container style={styles.container}>
      <Item>
        <Input
            placeholder="username"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(username) => this.setState({username})}
          />
      </Item>
      <Item>
        <Input
            placeholder="email"
            placeholderTextColor='#949799'
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
          />
      </Item>
      <Item>
        <Input
          placeholder="password"
          placeholderTextColor='#949799'
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({password})}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={this.loginUser}
        />
      </Item>

       <Button block info style={styles.hasmargin} onPress={this.findUser}>
         <Text style={styles.buttontext}>REGISTER</Text>
        </Button>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 3,
    margin: 10
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: '#ffdf45'
  },
  buttontext: {
    color: '#000000'
  }

});