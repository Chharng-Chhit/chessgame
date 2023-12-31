class Queen extends Piece {
	constructor(position, name) {
		super(position, 'queen', name);
	}

	getAllowedMoves(){
		const position = this.position;
		return [
			// [parseInt(position) + 1],
			// [parseInt(position) - 1],
			// [parseInt(position) + 10],
			// [parseInt(position) - 10],
			[parseInt(position) + 11],
			[parseInt(position) - 11],
			[parseInt(position) + 9],
			[parseInt(position) - 9]
		];
	}
}