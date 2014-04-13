Groups = new Meteor.Collection("groups", {
	schema: Schema.Group
});

var ownsGroup = function (userId, group) {
	return group.user === userId;
};

var isOperator = function (userId) {
	return Meteor.user().role === "operator";
};

Groups.allow({
	insert: ownsGroup,
	update: ownsGroup
});

Groups.allow({
	insert: isOperator,
	update: isOperator,
	remove: isOperator
});
