import { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity, Image, Text } from "react-native";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import MoleculeScene from "./MoleculeScene";
import Molecule from "../classes/Molecule";
import icons from "../constants/icons";
import style from "../constants/style";
import RotatingButton from "./RotatingButton";

const screen1 = "w-[100%] h-[70%]";
const screen2 = "absolute w-[98vw] h-[98vh] z-40 bottom-0 m-1";

const MoleculeView = (props) => {
	const [fileData, setFileData] = useState("");
	const [molecule, setMolecule] = useState(null);

	const [screen, setScreen] = useState(screen1);
	const [showAtomDetails, setShowAtomDetails] = useState({
		show: false,
		atom: null
	});

	const [moleculeRotation, setMoleculeRotation] = useState([0, 0, 0]);
	const rotateMolecule = (direction) => {
		if (direction === "UP")
			setMoleculeRotation(prev => [prev[0] - 15, prev[1], prev[2]]);
		else if (direction === "DOWN")
			setMoleculeRotation(prev => [prev[0] + 15, prev[1], prev[2]]);
		else if (direction === "LEFT")
			setMoleculeRotation(prev => [prev[0], prev[1] - 15, prev[2]]);
		else if (direction === "RIGHT")
			setMoleculeRotation(prev => [prev[0], prev[1] + 15, prev[2]]);
	};

	useEffect(() => {
		const getFile = async () => {
			try {
				const file = await fetch(`https://files.rcsb.org/ligands/
											${props.moleculeId[0]}/${props.moleculeId}/
											${props.moleculeId}_ideal.pdb`);
				const res = await file.text();
				setFileData(res);
			} catch (error) {
				Alert.alert("Error", error.message);
			}
		}
		getFile();
	}, []);

	useEffect(() => {
		setMolecule(new Molecule(fileData));
	}, [fileData]);
	// console.log(molecule)

	return (
		<View
			className={`${screen} bg-white flex flex-column py-4 px-4 rounded-[4px]`}
			style={style.boxShadow}
		>
			<RotatingButton direction="UP" iconStyle="rotate-90" rotateMolecule={rotateMolecule} />
			<RotatingButton direction="DOWN" iconStyle="-rotate-90 -scale-y-[1]" rotateMolecule={rotateMolecule} />
			<RotatingButton direction="LEFT" iconStyle="-scale-y-[1]" rotateMolecule={rotateMolecule} />
			<RotatingButton direction="RIGHT" iconStyle="rotate-180" rotateMolecule={rotateMolecule} />
			<View className="flex flex-row justify-between">
				{
					showAtomDetails.show &&
					<Text>Selected atom: {showAtomDetails.atom}</Text>
				}
				<TouchableOpacity
					className=" flex items-end w-8 h-8 ml-auto"
					onPress={() => setScreen(prev => prev === screen1 ? screen2 : screen1)}
				>
					<Image
						source={screen === screen1 ? icons.expand : icons.collapse}
						className={screen === screen1 ? "w-4 h-4" : "w-5 h-5"}
					/>
				</TouchableOpacity>
			</View>
			<ViroARSceneNavigator
				initialScene={{ scene: MoleculeScene }}
				viroAppProps={{
					molecule: molecule,
					showAtomDetails: showAtomDetails,
					setShowAtomDetails: setShowAtomDetails,
					moleculeRotation: moleculeRotation
				}}
			/>
		</View>
	);
};

export default MoleculeView;
