/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './components/Home';
import Message from './components/Message';
const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Message: {screen: Message},
  },
  {
    initialRouteName: 'Home',
  });
const App = createAppContainer(MainNavigator);
  
// class App extends Component{
//     renderScene(route, navigator){
//         switch(route.name){
//             case "home": return ( <Home />);
//             case "message": return ( <Message />);
//         }
//     }

//   render(){
//       return(
//        <View>
//             <Navigator
//         initialRoute={{name:"home"}}
//         renderScene={this.renderScene}
//       />
//            </View>
//       );
//   }
// }
export default App;