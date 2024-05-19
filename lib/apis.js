import ligands from "../constants/ligands";

export const getMolecule = async (moleculeId) => {
	try {
		const moleculeData = await fetch(`https://data.rcsb.org/rest/v1/core/chemcomp/${moleculeId}`);
		const response = await moleculeData.json();
		return (response);
	} catch (error) {
		throw new Error(error);
	}
}

export const getMolecules = async () => {
	let data = [];
	try {
		console.log("HERE")
		for (let ligand of ligands)
		{
			if (ligand === "0EA")
				break;
			const moleculeData = await fetch(`https://data.rcsb.org/rest/v1/core/chemcomp/${ligand}`);
			const response = await moleculeData.json();
			// console.log("RESPONSE", response);
			data.push(response);
		}
		// console.log("IN API", data)
		return (data);
	} catch (error) {
		throw new Error(error);
	}
}

export const getIntervalMolecules = async (start, end) => {
	let data = [];
	try {
		for (let i = start; i < end && i < ligands.length; i++)
		{
			const moleculeData = await fetch(`https://data.rcsb.org/rest/v1/core/chemcomp/${ligands[i]}`);
			const response = await moleculeData.json();
			data.push(response);
		}
		return (data);
	} catch (error) {
		throw new Error(error);
	}
}