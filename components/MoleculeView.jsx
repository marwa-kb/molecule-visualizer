import { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import MoleculeScene from "./MoleculeScene";
import Molecule from "../classes/Molecule";
import icons from "../constants/icons";
import style from "../constants/style";

const screen1 = "w-[100%] h-[70%]";
const screen2 = "absolute w-[98vw] h-[98vh] z-40 bottom-0 m-1";

const MoleculeView = (props) => {
	const [fileData, setFileData] = useState("");
	const [molecule, setMolecule] = useState(null);

	const [screen, setScreen] = useState(screen1);

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
			<TouchableOpacity
				className=" flex items-end w-8 h-8 ml-auto"
				onPress={() => setScreen(prev => prev === screen1 ? screen2 : screen1)}
			>
				<Image
					source={screen === screen1 ? icons.expand : icons.collapse}
					className={screen === screen1 ? "w-4 h-4" : "w-5 h-5"}
				/>
			</TouchableOpacity>
			<ViroARSceneNavigator
				initialScene={{ scene: MoleculeScene }}
				viroAppProps={{ molecule: molecule }}
			/>
		</View>
	);
};

export default MoleculeView;
