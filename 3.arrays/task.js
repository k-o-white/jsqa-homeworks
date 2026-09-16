function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}
	const averageAge = filteredUsers
		.map(user => user.age)
		.reduce((sum, age) => sum + age, 0) / filteredUsers.length;

	return averageAge;
}