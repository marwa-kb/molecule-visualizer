import { View, Text, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";

const FormattedFormula = (props) => {
	if (!props.formula)
		return;
	const normalStyle = "font-pregular text-lg";
	const subscriptlStyle = "font-pregular text-xs leading-10";
	const newFormula = props.formula.split("")
		.filter((item) => item !== " ")
		.map((c, id) => {
			if (c.search(/0|1|2|3|4|5|6|7|8|9/) !== -1)
				return (<Text key={id} className={subscriptlStyle}>{c}</Text>)
			return (<Text key={id} className={normalStyle}>{c}</Text>);
		});

	return (
		<View className="flex-row gap-x-[1px]">
			{newFormula}
		</View>
	);
}

const MoleculeInfoCard = (props) => {
	const pathname = usePathname();

	return (
		<TouchableOpacity
			className="mb-5 rounded-[4px] bg-white py-4 px-5"
			activeOpacity={props.touchable ? 0.6 : 1}
			onPress={() => props.touchable && router.push(`/molecule/${props.id}`)}
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
				<Text className="font-plight text-xs">
					{props.item?.chem_comp?.name?.toLowerCase()}
				</Text>
			}
		</TouchableOpacity>
	);
};

export default MoleculeInfoCard;
