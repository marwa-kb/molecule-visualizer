class Atom {
	constructor(line) {
		const data = line.split(/\s+/);
		this.element = data[data.length - 1];
		this.snb = Number(data[1]);
		this.id = data[2];
		this.coordinates = [Number(data[6]), Number(data[7]), Number(data[8])];
	}
}

class Conect {
	constructor(line) {
		const data = line.split(/\s+/);
		this.snb = Number(data[1]);
		this.bonds = [...data.slice(2).map((nb) => Number(nb))];
	}
}

export default class Molecule {
	constructor(fileContent) {
		this.fileContent = fileContent;
		this.lines = fileContent.split('\n');

		this.atoms = this.setAtoms();
		this.conects = this.setConects();
	}

	setAtoms() {
		let atoms = [];
		for (let line of this.lines) {
			if (line.startsWith("ATOM"))
				atoms.push(new Atom(line));
			else
				break;
		}
		return (atoms);
	}

	setConects() {
		let conects = [];
		for (let line of this.lines) {
			if (line.startsWith("CONECT"))
				conects.push(new Conect(line));
		}
		return (conects);
	}

	getAtomCoords(main, others) {
		let mainAtom;
		let otherAtoms = [];
		for (let atom of this.atoms)
		{
			if (atom.snb === main)
				mainAtom = atom.coordinates;
			else
			{
				for (let item of others)
				{
					if (atom.snb === item)
						otherAtoms.push(atom.coordinates);
				}
			}
		}
		return ({ mainAtom, otherAtoms });
	}

	getBondsCoords() {
		let bonds = [];
		for (let conect of this.conects)
		{
			const coords = this.getAtomCoords(conect.snb, conect.bonds);
			for (let other of coords.otherAtoms)
			{
				const data = [coords.mainAtom, other];
				if (data[0] && data[1])
					bonds.push(data);
			}
		}
		return (bonds);
	}

	getExtremums() {
		let xmin = this.atoms[0]?.coordinates[0] ?? 0;
		let xmax = xmin;
		let ymin = this.atoms[0]?.coordinates[1] ?? 0;
		let ymax = ymin;
		let zmin = this.atoms[0]?.coordinates[2] ?? 0;
		let zmax = zmin;

		for (let atom of this.atoms)
		{
			if (atom.coordinates[0] > xmax)
				xmax = atom.coordinates[0];
			if (atom.coordinates[0] < xmin)
				xmin = atom.coordinates[0];

			if (atom.coordinates[1] > ymax)
				ymax = atom.coordinates[1];
			if (atom.coordinates[1] < ymin)
				ymin = atom.coordinates[1];

			if (atom.coordinates[2] > zmax)
				zmax = atom.coordinates[2];
			if (atom.coordinates[2] < zmin)
				zmin = atom.coordinates[2];
		}
		return ({
			extremums: [xmin, xmax, ymin, ymax, zmin, zmax],
			focalPoint: [(xmin + xmax) / 2, (ymin + ymax) / 2, (zmin + zmax) / 2]
		});
	}
}