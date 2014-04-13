Schema.Person = new SimpleSchema({
	info: {
		type: Schema.PersonInfo
	},
	services: {
		type: [String],
		optional: true
	},
	user: {
		type: String,
		optional: true,
		denyUpdate: true
	}
});
