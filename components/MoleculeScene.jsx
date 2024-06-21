import { useEffect, useState } from "react";
import {
	ViroSkyBox,
	ViroNode,
	ViroOmniLight,
	ViroOrbitCamera,
	ViroSphere,
	ViroPolyline,
	ViroARScene,
} from "@viro-community/react-viro";
import "../constants/materials";

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	const selectedAtom = props.sceneNavigator.viroAppProps.selectedAtom;
	const setSelectedAtom = props.sceneNavigator.viroAppProps.setSelectedAtom;
	const [camPos, setCamPos] = useState([0, 0, 0]);
	const [focalPoint, setFocalPoint] = useState([0, 0, 0]);
	const [moleculeScale, setMoleculeScale] = useState([1, 1, 1]);

	useEffect(() => {
		if (molecule)
		{
			const data = molecule.getExtremums();
			setCamPos([0, 0, data.extremums[5] + data.extremums[1] * 3 + 1]); // must be checked
			setFocalPoint(data.focalPoint);
		}
	}, [molecule]);

	const atoms = molecule?.atoms.map((atom) => {
		const trColor = "TR_" + atom.element;
		return (
			<ViroSphere
				radius={0.3}
				key={atom.id}
				materials={
					!selectedAtom || selectedAtom.snb === atom.snb
						? atom.element
						: trColor
				}
				position={atom.coordinates}
				onClick={() => setSelectedAtom({ id: atom.id, snb: atom.snb, element: atom.element })}
			/>
		);
	});

	const bonds = molecule?.getBondsCoords().map((bond, id) => {
		return (
			<ViroPolyline
				key={id}
				points={[bond[0], bond[1]]}
				thickness={moleculeScale[0] * 0.2}
				materials={selectedAtom ? "TR_bond" : "bond"}
			/>
		);
	});

	const scaleMolecule = (pinchState, scaleFactor) => {
		if (pinchState === 2) {
			const newScale = [
				moleculeScale[0] * scaleFactor,
				moleculeScale[1] * scaleFactor,
				moleculeScale[2] * scaleFactor,
			];
			if (newScale[0] > 0.5 && newScale[0] < 5)
				setMoleculeScale(newScale);
		}
	};

	return (
		<ViroARScene
			onClick={() => selectedAtom && setSelectedAtom(null)}
		>
			<ViroSkyBox color={"#FFFFFF"} />
			{molecule && (
				<>
					<ViroOrbitCamera
						position={camPos}
						focalPoint={focalPoint}
						active={true}
					/>
					<Lights />
					<ViroNode
						scale={moleculeScale}
						onDrag={() => selectedAtom && setSelectedAtom(null)}
						onPinch={scaleMolecule}
					>
						{atoms}
						{bonds}
					</ViroNode>
				</>
			)}
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