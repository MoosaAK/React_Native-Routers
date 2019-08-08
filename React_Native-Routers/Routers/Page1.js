import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>PAGE 1</Text>
        <Button
          title="Back to Page"
          onPress={() =>
            this.props.navigation.navigate('Page')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
