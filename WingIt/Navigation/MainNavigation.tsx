import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Home from "../components/HomePage/Home";
import SignUp from "../components/SignUp/SignUp";
import LogIn from "../components/Login/Login";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{headerShown: false}}> 
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.SignUp} component={SignUp} />
        <Stack.Screen name={Routes.LogIn} component={LogIn} />
        </Stack.Navigator>
    );
};

export default MainNavigation;
