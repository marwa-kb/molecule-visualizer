import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Viro360Image, Viro3DObject, Viro3DSceneNavigator, ViroAmbientLight, ViroAnimations, ViroBox, ViroCamera, ViroController, ViroLightingEnvironment, ViroMaterials, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroPolyline, ViroScene, ViroSceneNavigator, ViroSphere, ViroText } from "@viro-community/react-viro";
import Molecule from "../classes/Molecule";
import style from "../constants/style";
import "../constants/materials";

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	// console.log("conects, ", molecule?.getBondsCoords());
	
	const atoms = molecule?.atoms.map((atom) => {
		return (<ViroSphere
					radius={.3}
					key={atom.id}
					materials={atom.element}
					position={atom.coordinates}
			/>);
	});

	const conects = molecule?.getBondsCoords().map((bond, id) => {
		// console.log("bond = ", bond)
			return (<ViroPolyline
						key={id}
						points={[
							bond[0],
							bond[1],
						]}
						thickness={0.2}
						materials={"H"}
					/>);
	});

	return (
		<ViroScene>
			{
				molecule ?
					<>
						<Viro360Image source={require("../assets/white_bg.png")} />
						{
							molecule &&
								<ViroOrbitCamera
									position={[6, 15, 5]}
									focalPoint={[0, 0, 0]}
									active={true}
								/>
						}
						{/* <ViroCamera position={[0.484, -0.006, 4]} rotation={[0, 0, 0]} active={true} /> */}
			
						<ViroOmniLight
							intensity={300}
							position={[-10, 10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30} />
						<ViroOmniLight
							intensity={300}
							position={[10, 10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30} />
						<ViroOmniLight
							intensity={300}
							position={[-10, -10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30} />
						{/* <ViroOmniLight
							intensity={300}
							position={[10, -10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30} /> */}
						{ atoms }
						{ conects }
					</>
				:
					<ViroOmniLight
						intensity={300}
						position={[10, -10, 1]}
						color={"#FFFFFF"}
						attenuationStartDistance={20}
						attenuationEndDistance={30} />

			}
	  </ViroScene>
	);
}

const MoleculeView = (props) => {
	const [fileData, setFileData] = useState("");
	const [molecule, setMolecule] = useState(null);

	useEffect(() => {
		const getFile = async () => {
			try {
				const file = await fetch(`https://files.rcsb.org/ligands/
											${props.moleculeId[0]}/${props.moleculeId}/
											${props.moleculeId}_ideal.pdb`);
				const res = await file.text();
				// console.log("RES", res)
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

	// console.log("here molecule: ", molecule)

	return (
		<View
			className="h-[70%] bg-white py-4 px-5"
			style={style.boxShadow}
		>
			<Viro3DSceneNavigator
				initialScene={{ scene: MoleculeScene }}
				viroAppProps={{ molecule: molecule }}
			/>
		</View>
	);
};

export default MoleculeView;
