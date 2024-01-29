export function isAssetValid(assetName: string, existingAssetNames: string[]) {
	if (!assetName) {
		return false;
	}

	return !existingAssetNames.some((x) => {
		return x === assetName;
	});
}
