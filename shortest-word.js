// Simple, given a string of words, return the length of the shortest word(s)

// String will never be empty and you do not need to account for different data types

function findShort(s) {
	let arr = s.split(' ');
	let shortest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length <= shortest.length) {
			shortest = arr[i];
		}
	}
	return shortest.length;
}
