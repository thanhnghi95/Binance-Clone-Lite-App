import { icons, COLORS } from "../constants";
import { StyleSheet,
     Text, 
     View,
        Image
    } from 'react-native';
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    height:60,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: COLORS.primary,
                    elevation: 0,
                  
                }
            }}
    
        >
            <Tab.Screen
                component={Home}
                tabBar
                name='Chart'
                options={{
                    tabBarIcon: ({ focused }) => (
                       
                            <Image
                                source={icons.barChart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.white : COLORS.noFocus

                                }}
                            />          
               
                        
                    ),
                    tabBarShowLabel:false,
                }}
            />
            <Tab.Screen
                component={Home}
                showLabel={false}
                name='Transfer'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width:35,
                                height:35,
                                backgroundColor:'yellow',
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:5,
                                transform: [{ rotate: "45deg" }]
                            }}
                        >
                            {focused ? 
                                <Image
                                    source={icons.close}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        transform: [{ rotate: "135deg" }],
                                        tintColor: focused ? COLORS.primary : COLORS.noFocus
                                    }}
                                />
                            :
                            <Image
                                    source={icons.transfer}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        transform: [{ rotate: "135deg" }],
                                        tintColor: focused ? COLORS.white : COLORS.noFocus
                                    }}
                                />
                            }
                        </View>
                    ),
                    tabBarShowLabel:false,
                }}
            />
            <Tab.Screen
                component={Home}
                showLabel={false}
                name='Wallet'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.wallet}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.noFocus
                            }}
                        />
                    ),
                    tabBarShowLabel:false,
                }}
            />

        </Tab.Navigator>
      );
}
 
export default Tabs;