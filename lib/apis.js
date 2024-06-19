export const getMoleculeInfo = async (moleculeId) => {
	try {
		const moleculeData = await fetch(
			`https://data.rcsb.org/rest/v1/core/chemcomp/${moleculeId}`
		);
		const response = await moleculeData.json();
		return response;
	} catch (error) {
		throw new Error(error);
	}
};

export const getMoleculeIdealStruct = async (moleculeId) => {
	try {
		const file = await fetch(`https://files.rcsb.org/ligands/
			${moleculeId[0]}/${moleculeId}/
			${moleculeId}_ideal.pdb`);
		const response = await file.text();
		return response;
	} catch (error) {
		throw new Error(error);
	}
};

export const getMoleculeModelStruct = async (moleculeId) => {
	try {
		const file = await fetch(`https://files.rcsb.org/ligands/
			${moleculeId[0]}/${moleculeId}/
			${moleculeId}_model.pdb`);
		const response = await file.text();
		return response;
	} catch (error) {
		throw new Error(error);
	}
};
