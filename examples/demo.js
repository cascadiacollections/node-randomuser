// @ts-check
'use strict';

var RandomUser = require('../lib/index')
  , r = new RandomUser();

r.getUsers(function(data) {
	console.log(data);
});

r.getUsers({ seed: "foxie", results: 5, gender: "male" }, function(data) {
	console.log(data);
});
