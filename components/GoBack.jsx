import { View, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
import { router } from "expo-router";

const GoBack = (props) => {
	return (
		<TouchableOpacity
		className="h-10 justify-center mb-5"
		onPress={() => router.back()}
		>
			<View className={`w-10 h-10 rounded-full justify-center items-center ${props.containerStyles}`}>
				<Image
					source={icons.chevron}
					className="w-4 h-4 absolute"
				/>
			</View>
		</TouchableOpacity>
	);
};

export default GoBack;
