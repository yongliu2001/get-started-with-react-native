'use strict';

var React = require('react-native');
var { StyleSheet } = React;

export default StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  }
});