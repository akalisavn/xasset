import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AssetList from './components/AssetList';
import { bindActionCreators } from 'redux';
import * as Actions from './actions/AssetsActions';
import {connect} from 'react-redux';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAssetsFromMaximo();
  }

  render() {
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
    assets: state.assetsReducer.assets,
    isFetching: state.assetsReducer.isFetching,
    error: state.assetsReducer.error
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
