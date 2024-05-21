import { useState } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { icons } from "../constants";
import { router } from "expo-router";
import style from "../constants/style";

const SearchInput = (props) => {
	const [query, setQuery] = useState(props.initialQuery);

	return (
		<View
			className="w-full px-2 py-2 border flex-row justify-start items-center rounded-[100px] bg-primary"
			style={style.boxShadow}
		>
			<Image
				source={icons.search}
				className="w-4 h-4 mx-3"
				resizeMode="contain"
			/>
			<TextInput
				className="w-[80%]"
				value={query}
				placeholder={props.placeholder}
				placeholderTextColor="#989898"
				onChangeText={(e) => setQuery(e)}
				returnKeyType="search"
				onSubmitEditing={() => query && router.push(`/search/${query}`)}
			/>
			{
				query?.length > 0 &&
					<Text
						className="w-4 mx-1"
						onPress={() => setQuery("")}
					>
						⨉
					</Text>
			}
		</View>
	);
};

export default SearchInput;
