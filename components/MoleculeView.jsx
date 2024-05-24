import { useEffect, useState, useRef } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { Viro3DSceneNavigator, ViroScene, ViroSkyBox, ViroCamera, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroSphere, ViroPolyline, ViroSpinner, ViroController, ViroDirectionalLight, ViroAmbientLight, ViroARScene, ViroARSceneNavigator, ViroSpotLight } from "@viro-community/react-viro";
import { useRotate } from "../utils/useRotate";
import icons from "../constants/icons";
import Molecule from "../classes/Molecule";
import style from "../constants/style";
import "../constants/materials";

const Lights = (props) => {
	return (
		<>
			<ViroOmniLight
				intensity={300}
				position={[10, 10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, -10, -10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, 10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, -10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[10, -10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[10, -10, -10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
		</>
	);
};

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	const [isLoading, setIsLoading] = useState(true);
	const [camPos, setCamPos] = useState([0, 0, 0]);
	const [focalPoint, setFocalPoint] = useState([0, 0, 0]);
	const [moleculeScale, setMoleculeScale] = useState([1, 1, 1]);
	const [moleculeRotation, setMoleculeRotation] = useState([0, 0, 0]);

	useEffect(() => {
		if (molecule)
		{
			const data = molecule.getExtremums();
			setCamPos([0, 0, data.extremums[5] + data.extremums[1] * 3]);
			setFocalPoint(data.focalPoint);
			setTimeout(() => setIsLoading(false), 1000);
		}
	}, [molecule]);
	
	const atoms = molecule?.atoms.map((atom) => {
		return (<ViroSphere
					radius={.3}
					key={atom.id}
					materials={atom.element}
					position={atom.coordinates}
					onClick={(e) => {
						console.log("ATOM: ", e)
						const x = e[0];
						const y = e[1];
						const z = e[2];
						// onTouchStart(e)
						// setCamPos([x, y, z]);
					}}
				/>);
	});

	const bonds = molecule?.getBondsCoords().map((bond, id) => {
		return (<ViroPolyline
					key={id}
					points={[
						bond[0],
						bond[1],
					]}
					thickness={moleculeScale[0] * 0.2}
					materials={"bond"}
				/>);
	});

	const rotateMolecule = (rotateState, rotationFactor, source) => {
		if (rotateState === 1)
			console.log("1 rotation factor ",rotationFactor)
		if (rotateState === 3)
		{
			console.log("curent rotation ", moleculeRotation)
			console.log("rotation factor ",rotationFactor)
			const newRotation = [
				moleculeRotation[0] - rotationFactor,
				moleculeRotation[1] - rotationFactor,
				moleculeRotation[2] - rotationFactor
			];
			setMoleculeRotation(newRotation);
		}

	};

	const scaleMolecule = (pinchState, scaleFactor, source) => {
		if (pinchState === 3)
		{
			console.log("curent scale ", moleculeScale)
			console.log("scale factor ",scaleFactor)
			const newScale = [
				moleculeScale[0] * scaleFactor,
				moleculeScale[1] * scaleFactor,
				moleculeScale[2] * scaleFactor
			];
			setMoleculeScale(newScale);
		}
	};

	return (
		<ViroARScene>
			<ViroSkyBox color={"#FFFFFF"} />
			{
				!isLoading && molecule ?
					<>
						<ViroOrbitCamera
							position={camPos}
							focalPoint={focalPoint}
							active={true}
						/>
						<Lights focalPoint={focalPoint} />
						<ViroNode
							// animation={{ name: "test", run: true }}
							scale={moleculeScale}
							rotation={moleculeRotation}
							onDrag={() => {}}
							// onRotate={rotateMolecule}
							onPinch={scaleMolecule}
						>
							{ atoms }
							{ bonds }
						</ViroNode>
					</>
				:
					<ViroSpinner
						type="dark"
						position={[0, 0, -5]}
					/>
			}
	  </ViroARScene>
	);
}

const screen1 = "h-[70%]";
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
