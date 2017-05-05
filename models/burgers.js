const orm = require("../config/orm.js");

const BurgerModel = {
	//Select all of the data that will eventually be displayed in the left-side list (not-devoured)
	selectAllUndevoured(cb) {
		orm.selectAll("burgers", "devoured", false, (data) => {
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
	updateBurger(burger) {
		orm.updateOne("burgers", "devoured", true, "burger_name", burger, (data) => {
			console.log("YOUR SELECTED BURGER WAS UPDATED!!");
		});
	}

	//Select all of the data that will eventually be displayed in the right-side list (devoured)
	selectAllDevoured() {
		orm.selectAll("burgers", "devoured", true, (data) => {
			// console.log("SELECT ALL TRUE: " + JSON.stringify(data));
			console.log(data);
			return data;
		});
	},


};

module.exports = BurgerModel;
