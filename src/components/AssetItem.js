import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/AssetsActions';

class AssetItem extends Component{

  static propTypes = {
    assetItem: PropTypes.object.isRequired,
  }
  
  render() {
    const asset = this.props.assetItem;
    if (asset.assetnum == '13160') {
      console.log(asset.audited);
      console.log(asset.lastauditdate);
    }
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={styles.toprow}>
            <View style={styles.assettag}>
              <Text style={styles.assettagtxt}>{asset.assetnum}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statustxt}>{asset.status}</Text>
            </View>
          </View>
          <View style={styles.bottomrow}>
            <View>
              <Text>{asset.description}</Text>
              <Text>{asset.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkboxcontainer}>
          <CheckBox containerStyle={{backgroundColor: '#eeeeee'}} 
              checked={asset.audited} 
              onPress={() => this.props.checkAuditAsset(asset.assetnum)}/>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state, props) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetItem)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },
  toprow: {
    flexDirection: 'row',
    borderBottomColor: '#cecece',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  assettag: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  assettagtxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  statustxt: {
    alignSelf: 'flex-end',
  },
  bottomrow: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 5,
  },
  details: {
    flex: 7,
    justifyContent: 'flex-start',
  },
  checkboxcontainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
});
