import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title: 'DevRadar'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil No GitHub'
            }
        },
    },{
        defaultNavigationOptions:{
            headerTintColor:'#FFFF',
            headerTitleStyle:{
                fontFamily:"Roboto",
                fontWeight:"bold",
            },
            headerStyle:{
                backgroundColor:'#7D40e7',
            },
            headerTitleAlign:"center",
        }
    })
);

export default Routes;