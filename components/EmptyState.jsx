import { View, Text } from "react-native";

const EmptyState = (props) => {
	return (
		<View>
			<Text>{props.title}</Text>
		</View>
	);
};

export default EmptyState;
