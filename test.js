const test = require("ava")
const modularPower = require(".")

test("main", t => {
	t.is(modularPower(2, 3, 3), 2)
	t.is(modularPower(2, 3, 5), 3)
})
