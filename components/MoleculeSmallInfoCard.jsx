import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { memo } from "react";
import FormattedFormula from "./FormattedFormula";
import style from "../constants/style";

const MoleculeSmallInfoCard = (props) => {
	return (
		<TouchableOpacity
			className="text-black mb-5 py-4 px-5 z-0 rounded-[20px] bg-white"
			style={style.boxShadow}
			activeOpacity={0.8}
			onPress={() => router.push(`/molecule/${props.id}`)}
		>
			<View className="flex-row justify-between mb-3 items-start">
				<Text className="font-psemibold text-xl">{props.id}</Text>
				{
					props.item &&
						<FormattedFormula formula={props.item?.chem_comp?.formula} />
				}
			</View>
			{
				props.item &&
					<Text className="text-black font-plight text-xs mb-3">
						{props.item?.chem_comp?.name?.toLowerCase()}
					</Text>
			}
		</TouchableOpacity>
	);
};

export default memo(MoleculeSmallInfoCard);
