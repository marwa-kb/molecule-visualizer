import { View, Text, TouchableOpacity } from "react-native";
import { useState, memo } from "react";
import FormattedFormula from "./FormattedFormula";
import style from "../constants/style";

const MoleculeBigInfoCard = (props) => {
	const [height, setHeight] = useState("h-[114px]");

	return (
		<TouchableOpacity
			className={`${height} "text-black mb-5 pt-4 px-5 z-0 rounded-[20px] bg-white`}
			style={style.boxShadow}
			activeOpacity={1}
			onPress={() => setHeight(prev => prev === "h-[114px]" ? "h-auto" : "h-[114px]")}
		>
			<View className="flex-row justify-between mb-3 items-start">
				<Text className="font-psemibold text-xl">{props.id}</Text>
				{
					props.item &&
						<FormattedFormula formula={props.item?.chem_comp?.formula} />
				}
			</View>
			{props.item &&
				<Text
					className="text-black font-plight text-xs mb-6"
					numberOfLines={height === "h-[114px]" ? 1 : 100}
				>
					{props.item?.chem_comp?.name?.toLowerCase()}
				</Text>
			}
		</TouchableOpacity>
	);
};

export default memo(MoleculeBigInfoCard);
