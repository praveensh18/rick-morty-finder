export const capitalizeFirstLetter = (text: string) => {
	return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

export const formattedDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB');
}