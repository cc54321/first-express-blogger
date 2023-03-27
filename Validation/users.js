const validateUserData = (userData) => {



	if (userData.email === undefined || typeof(userData.email) !== "string") {
		// email is required and it must be a string
		return {
			isValid: false,
			message: "Email is required and it must be a string"
		}
	}

	if (userData.firstName === undefined || typeof(userData.firstName) !== "string") {
		// firstName is required and it must be a string
		return {
			isValid: false,
			message: "First name is required and it must be a string"
		}
	}

	if (userData.lastName === undefined || typeof(userData.lastName) !== "string") {
		// lastName is required and it must be a string
		return {
			isValid: false,
			message: "Last name is required and it must be a string"
		}
	}

	if (userData.age !== undefined && typeof(userData.age) !== "number") {

		return {
			isValid: false,
			message: "Age must be a number"
		}
	}

	
	
}

module.exports = {
	
	validateUserData,
}