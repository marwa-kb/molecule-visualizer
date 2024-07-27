import { View, Text } from "react-native";

const FormattedFormula = (props) => {
	if (!props.formula)
		return;
	const normalStyle = "font-pregular text-lg";
	const subscriptStyle = "font-pregular text-xs leading-10";
	const newFormula = props.formula
		.split("")
		.filter((item) => item !== " ")
		.map((c, id) => {
			if (c.search(/0|1|2|3|4|5|6|7|8|9/) !== -1)
				return (
					<Text key={id} className={subscriptStyle}>
						{c}
					</Text>
				);
			return (
				<Text key={id} className={normalStyle}>
					{c}
				</Text>
			);
		});

	return (
		<View className="flex-row gap-x-[1px]">{newFormula}</View>
	);
};

export default FormattedFormula;
