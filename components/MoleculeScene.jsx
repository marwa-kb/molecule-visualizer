import { useEffect, useState } from "react";
import { ViroSkyBox, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroSphere, ViroPolyline, ViroSpinner, ViroARScene } from "@viro-community/react-viro";
import "../constants/materials";

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	const [isLoading, setIsLoading] = useState(true);
	const [camPos, setCamPos] = useState([0, 0, 0]);
	const [focalPoint, setFocalPoint] = useState([0, 0, 0]);
	const [moleculeScale, setMoleculeScale] = useState([1, 1, 1]);
	const [moleculeRotation, setMoleculeRotation] = useState([0, 0, 0]);
	const [rotating, setRotating] = useState(false);

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

	const rotateMolecule = (rotateState, rotationFactor) => {
		if (rotateState === 1)
			setRotating(true);
		else if (rotateState === 2)
		{
			const newRotation = [
				moleculeRotation[0] - rotationFactor / 20,
				moleculeRotation[1] - rotationFactor / 20,
				moleculeRotation[2] - rotationFactor / 20
			];
			setMoleculeRotation(newRotation);
		}
		else if (rotateState === 3)
			setRotating(false);
	};

	const scaleMolecule = (pinchState, scaleFactor) => {
		if (!rotating && pinchState === 3)
		{
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
				!isLoading && molecule &&
					<>
						<ViroOrbitCamera
							position={camPos}
							focalPoint={focalPoint}
							active={true}
						/>
						<Lights />
						<ViroNode
							scale={moleculeScale}
							rotation={moleculeRotation}
							onDrag={() => {}}
							onPinch={scaleMolecule}
							onRotate={rotateMolecule}
						>
							{ atoms }
							{ bonds }
						</ViroNode>
					</>
			}
	  </ViroARScene>
	);
};

const Lights = () => {
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

export default MoleculeScene;