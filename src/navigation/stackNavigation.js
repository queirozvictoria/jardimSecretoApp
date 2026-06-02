import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../telas/registerScreen";
import SplashScreen from "../telas/SplashScreen";
import LoginScreen from "../telas/LoginScreen";
import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>



    </Stack.Navigator>
  );

}