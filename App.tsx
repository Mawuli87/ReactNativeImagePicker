//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';




const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App


// const Stack = createNativeStackNavigator();
// // create a component
// const MyComponent = () => {
//   return (
//    <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           <Stack.Screen name="DetailScreen" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };