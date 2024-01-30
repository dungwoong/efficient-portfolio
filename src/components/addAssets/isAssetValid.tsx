export function isNameUnique(name: string, existingNames: string[]) {
	if (!name) {
		return false;
	}

	return !existingNames.some((x) => {
		return x === name;
	});
}
