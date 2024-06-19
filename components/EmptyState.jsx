import { View, Text, Image } from "react-native";
import { images } from "../constants";

const EmptyState = (props) => {
	return (
		<View className="justify-center items-center mt-10">
			<Text className="text-base font-regular">{props.title}</Text>
			<Image
				source={images.noResults}
				className="w-[200px] h-[200px] mt-6"
			/>
		</View>
	);
};

export default EmptyState;
