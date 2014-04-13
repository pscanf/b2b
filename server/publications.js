Meteor.publish("persons", function () {
	return Persons.find({user: this.userId});
});

Meteor.publish("groups", function () {
	return Groups.find({user: this.userId});
});
