import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions/LoginActions';
import {connect} from 'react-redux';
import { getUserPassword } from '../schemas/RealmUtil';

class LoginForm extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
        }
      }
    
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logosection}>
                    <View style={styles.logocontainer}>
                       <Image style={styles.logo} source={require('../../images/logo.jpg')} />
                    </View>
                    <Text style={styles.title}>Maximo Audit</Text>
                </View>
                <View style={styles.loginsection}>
                    <View style={styles.inputsection}>
                        <TextInput style = {styles.logininput} 
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.passwordInput.focus()} 
                                autoCorrect={false} 
                                keyboardType='email-address' 
                                returnKeyType="next" 
                                placeholder='User Name'
                                onChangeText={(text) => this.setState({username:text})} 
                                placeholderTextColor='rgba(225,225,225,0.7)'/>
                    </View>
                    <View style={styles.inputsection}>
                        <TextInput style = {styles.logininput}   
                                returnKeyType="go" 
                                ref={(input)=> this.passwordInput = input} 
                                placeholder='Password'
                                onChangeText={(text) => this.setState({password:text})} 
                                placeholderTextColor='rgba(225,225,225,0.7)' 
                                secureTextEntry/>
                    </View>
                    <View style={styles.buttongroup}>
                        <TouchableOpacity style={styles.loginbutton}
                            onPress={this.handleLogin}>
                            <Text style={styles.buttontext}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.networkbutton}>
                            <Text style={styles.buttontext}>Network</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.copyrightsection}>
                    <Text style={styles.copyrighttext}>Copyright 2018 - xTensions.Org</Text>
                </View>
            </KeyboardAvoidingView>
        ) 
    }

    handleLogin = () => {
        this.props.authenticateUser(this.state.username, this.state.password);
    }
}

function mapStateToProps(state, props) {
    return {
      assets: state.assets.assets,
      isFetching: state.assets.isFetching,
      error: state.assets.error,
      loggedin: state.login.loggedin,
      loginfailcount: state.login.loginfailcount
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 30,
        // backgroundColor: '#2c3e50',
        backgroundColor: '#4C91ED',
        //backgroundColor: '#8FB3CA',
    },

    logosection: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logocontainer: {
        borderRadius: 100,
        overflow: 'hidden',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: 'Baskerville-SemiBold',
        fontSize: 30,
        //color: '#01579B',
        color: '#275199'
    },

    loginsection: {
        flex: 3,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    loginlabel: {
        padding: 5,
        fontSize: 15,
        
        width: 100,
    },
    inputsection: {
        flexDirection: 'row',
    },
    logininput: {
        height: 40,
        fontSize: 16,
        flexGrow: 1,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttongroup: {
        flexDirection: 'row-reverse',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
    },
    loginbutton: {
        height: 40,
        width: 100,
        borderRadius: 3,
        backgroundColor: '#5CA1FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    networkbutton: {
        height: 40,
        width: 100,
        marginRight: 15,
        borderRadius: 3,
        backgroundColor: '#5CA1FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 16,
        color: '#122D46'
    },
    copyrightsection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    copyrighttext: {
        fontSize: 12,
        color: '#122D46',
    },
});
  