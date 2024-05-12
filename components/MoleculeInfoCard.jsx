import { View, Text } from "react-native";
import React from "react";

const MoleculeInfoCard = (props) => {
	console.log("PROPS.INFO", props.item)
	const { chem_comp } = props.item;
	return (
		<View className="mb-5 rounded-[4px] bg-white py-4 px-5 h-[185px]">
			<Text>{chem_comp.formula}</Text>
			<Text>{chem_comp.id}</Text>
			<Text>{chem_comp.name}</Text>
		</View>
	);
};

export default MoleculeInfoCard;
