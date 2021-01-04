import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import { Block } from './components';


// import all used images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plant.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/images/plant_1.jpg'),
  require('./assets/images/plant_2.jpg'),
  require('./assets/images/plant_3.png'),
  require('./assets/images/explore_1.jpg'),
  require('./assets/images/explore_2.jpg'),
  require('./assets/images/explore_3.jpg'),
  require('./assets/images/explore_4.jpg'),
  require('./assets/images/explore_5.jpg'),
  require('./assets/images/explore_6.jpg'),
  require('./assets/images/avatar.jpg'),

];

export default class App extends React.Component() {
  state ={
    isLoadingComplete: false,
  }

  handelResourcesAsync = async () => {
    // we're cashing all the images
    // for better performance on the app 
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }


  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return(
        <AppLoading 
        startAsync ={this.handelResourcesAsync}
        onError={error => console.warn(error)}
        onFinish={()=> this.setState({ isLoadingComplete: true })}
        />
      )
    }

    
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
