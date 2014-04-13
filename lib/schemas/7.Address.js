Schema.Address = new SimpleSchema({
	street: {
		type: String,
		optional: true
	},
	number: {
		type: String,
		optional: true
	},
	postalCode: {
		type: String,
		optional: true
	},
	city: {
		type: String,
		optional: true
	},
	county: {
		type: String,
		optional: true
	},
	country: {
		type: String,
		optional: true
	},
	tags: {
		type: [String],
		optional: true
	}
});
