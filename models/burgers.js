const orm = require("../config/orm.js");

const BurgerModel = {
	//Select all of the data that will eventually be displayed in the left-side list (not-devoured)
	selectAllBurgers(cb) {
		orm.selectAll("burgers", (data) => {
			cb(data);
		});
	},

	//Insert a particular burger into the not-devoured section
	insertBurger(burger, cb) {
		orm.insertOne("burgers", "burger_name", burger, (data) => {
			cb(data);
		});
	},

	//Update a particular burger such that it is devoured
	updateBurger(id, cb) {
		orm.updateOne("burgers", "devoured", true, "id", id, (data) => {
			cb(data);
		});
	}
};

module.exports = BurgerModel;
