import { useState } from "react";
import { View, TextInput, Image, Alert } from "react-native";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = (props) => {
	const pathname = usePathname();
	const [query, setQuery] = useState(props.initialQuery);

	return (
		<View className="w-full px-2 py-2 border flex-row justify-start items-center rounded-[100px]">
			<Image
				source={icons.search}
				className="w-4 h-4 mx-3"
				resizeMode="contain"
			/>
			<TextInput
				className="w-[85%]"
				value={query}
				placeholder={props.placeholder}
				placeholderTextColor="#989898"
				onChangeText={(e) => setQuery(e)}
				returnKeyType="search"
				onSubmitEditing={() => query && router.push(`/search/${query}`)}
			/>
		</View>
	);
};

export default SearchInput;
