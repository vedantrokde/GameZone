import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const HomeStack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerTintColor: "#444",
				headerStyle: { backgroundColor: "#eee", height: 60 },
			}}
		>
			<HomeStack.Screen
				name="Home"
				options={{
					title: "GameZone",
					headerLeft: (props) => (
						<MaterialIcons
							{...props}
							name="menu"
							size={28}
							color="#444"
							onPress={() => navigation.openDrawer()}
							style={{ marginLeft: 10 }}
						/>
					),
					headerTitle: ({ children, ...props }) => (
						<View style={styles.headerTitle}>
							<Image
								style={styles.headerImage}
								source={require("../assets/heart_logo.png")}
							/>
							<Text style={styles.headerText}>{children}</Text>
						</View>
					),
					headerBackground: () => (
						<ImageBackground
							source={require('../assets/game_bg.png')}
							style={StyleSheet.absoluteFill}
						/>
					),
				}}
				component={Home}
			/>
			<HomeStack.Screen
				name="ReviewDetails"
				options={{
					title: "Review Details",
				}}
				component={ReviewDetails}
			/>
		</HomeStack.Navigator>
	);
}

const styles = StyleSheet.create({
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#333",
		letterSpacing: 1,
	},
	headerTitle: {
		flexDirection: "row",
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
