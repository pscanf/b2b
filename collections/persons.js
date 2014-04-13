Persons = new Meteor.Collection("persons", {
	schema: Schema.Person
});

var ownsPerson = function (userId, person) {
	return person.user === userId;
};

var isOperator = function (userId) {
	return Meteor.user().role === "operator";
};

Persons.allow({
	insert: ownsPerson,
	update: ownsPerson
});

Persons.allow({
	insert: isOperator,
	update: isOperator,
	remove: isOperator
});
