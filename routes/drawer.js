import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import AboutNavigator from "./aboutStack";
import HomeNavigator from "./homeStack";

const RootDrawerNavigator = createDrawerNavigator();

export default function RootNavigator({ onReady }) {
	return (
		<NavigationContainer onReady={onReady}>
			<RootDrawerNavigator.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<RootDrawerNavigator.Screen
					name="HomeStack"
                    options={{
                        title: "Home",
                    }}
					component={HomeNavigator}
				/>
				<RootDrawerNavigator.Screen
					name="AboutStack"
                    options={{
                        title: "About",
                    }}
					component={AboutNavigator}
				/>
			</RootDrawerNavigator.Navigator>
			{/* remove status bar for production */}
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
