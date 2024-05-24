import { Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";

const RotatingButton = (props) => {
	const containerStyle = props.direction === "UP" ? "top-0 left-[50%] right-[50%]"
		: props.direction === "DOWN" ? "bottom-0 left-[50%] right-[50%]"
		: props.direction === "LEFT" ? "left-0 top-[50%] bottom-[50%]"
		: "right-0 top-[50%] bottom-[50%]";

	return (
		<TouchableOpacity
			className={`absolute border w-10 h-10 rounded-full ${containerStyle}
			z-50 flex justify-center items-center`}
			onPress={() => props.rotateMolecule(props.direction)}
		>
			<Image
				source={icons.rotate}
				className={`w-8 h-8 ${props.iconStyle}`}
			/>
		</TouchableOpacity>
	);
};

export default RotatingButton;
