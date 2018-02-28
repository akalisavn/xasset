import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { bindActionCreators } from 'redux';
import * as Actions from './actions/AssetsActions';
import {connect} from 'react-redux';

import AssetList from './components/AssetList';
import LoginForm from './components/LoginForm';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAssetsFromMaximo();
  }

  render() {
    if (!this.props.loggedin) {
      return (
          <LoginForm />
      );
    }
    console.log('fetching data: ' + this.props.isFetching);
    console.log('state.loggedin: ' + this.props.loggedin);
    console.log('fail count: ' + this.props.loginfailcount);

    if (this.props.isFetching) {
      return (
        <View style={styles.container}>
          <Text>Retrieving assets</Text>
        </View>
      );  
    } 

    if (this.props.assets.length > 0) {
      return (
        <View style={styles.container}>
          <AssetList assets={this.props.assets} />
        </View>
      );
    }
          
    return (
      <View  style={styles.container}>
        <Text>Welcome to xAssets</Text>
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
