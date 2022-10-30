import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";


import About from "../screens/about";

const AboutStack = createStackNavigator();

export default function AboutNavigator() {
	return (
		<AboutStack.Navigator
			initialRouteName="About"
			screenOptions={{
				headerTintColor: "#444",
				headerStyle: { backgroundColor: "#eee", height: 60 },
			}}
		>
			<AboutStack.Screen
				name="About"
				options={{
					title: "About GameZone",
					headerLeft: (props) => (
						<MaterialIcons
							{...props}
							name="menu"
							size={28}
							color="#444"
							onPress={() => navigation.openDrawer()}
							style={{ paddingLeft: 10 }}
						/>
					),
				}}
				component={About}
			/>
		</AboutStack.Navigator>
	);
}
