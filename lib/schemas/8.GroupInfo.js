Schema.GroupInfo = new SimpleSchema({
	name: {
		type: String,
		optional: true
	},
	fiscalCode: {
		type: String,
		optional: true
	},
	addresses: {
		type: [Schema.Address],
		optional: true
	},
	emails: {
		type: [Schema.Email],
		optional: true
	},
	phones: {
		type: [Schema.Phone],
		optional: true
	},
	faxes: {
		type: [Schema.Fax],
		optional: true
	},
	website: {
		type: String,
		optional: true
	}
});
