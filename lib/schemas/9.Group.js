Schema.Group = new SimpleSchema({
	info: {
		type: Schema.GroupInfo
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
