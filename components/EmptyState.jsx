import { View, Text, Image } from "react-native";
import { images } from "../constants";

const EmptyState = (props) => {
	return (
		<View className="justify-center items-center mt-10">
			<Text className="text-base font-regular">{props.title}</Text>
			<Image
				source={images.noResults}
				className="w-[300px] h-[300px] mt-5"
			/>
		</View>
	);
};

export default EmptyState;
