const validateBlogs = (blogData) => {

	/* // EXAMPLE of .filter()
	const array = ["string", 2, true, "other string"]
	const filteredArray = array.filter((arrayItem)=>{
		// .filter() will loop through an array we provide and will only return items that match true for the condition that we define
		// For .filter() the return value must be a boolean and should be true for items that we want to keep
		if (typeof(arrayItem) === 'string') {
			return true;
		} else {
			return false;
		}
	})
	console.log("array ", array)
	console.log("filteredArray ", filteredArray) */

	if (blogData.title === undefined || typeof(blogData.title) !== "string") {
		//blog data must be of type string
		return {
			isValid: false,
			message: "title is required and must be of type string"
		}
	}

	if (blogData.text === undefined || typeof(blogData.text) !== "string") {

		return {
			isValid: false,
			message: "blog is required and must be of type string"
		}
	}

	if (blogData.author === undefined || typeof(blogData.author) !== "string") {
		// lastName is required and it must be a string
		return {
			isValid: false,
			message: "Author is required and it must be a string"
		}
	}

	if (blogData.category === undefined || !Array.isArray(blogData.category) || blogData.category.length === 0) {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false,
			message: "category is required and must have length"
		}
	}



	const newBlogData = blogData.category.filter((blogs)=>{


		if (typeof(blogs) !== 'string') {
			return true
		} else {
			return false
		}
	})

	console.log("blogs", newBlogData)

	if (newBlogData.length > 0) {
		return {
			isValid: false,
			message: "category must be an array of strings"
		}
	}

	return {
		isValid: true
	}
}

module.exports = {
    validateBlogs,
}