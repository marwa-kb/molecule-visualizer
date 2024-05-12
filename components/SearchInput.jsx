import { View, TextInput, Image } from "react-native";
import { icons } from "../constants";

const SearchInput = (props) => {
	return (
		<View className="w-full px-2 py-2 border flex-row justify-start items-center rounded-[100px]">
			<Image
				source={icons.search}
				className="w-4 h-4 mx-3"
				resizeMode="contain"
			/>
			<TextInput
				placeholder={props.placeholder}
				placeholderTextColor="#989898"
			/>
		</View>
	);
};

export default SearchInput;
