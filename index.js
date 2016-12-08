#!/usr/bin/env node

var commander = require("commander");
var child_process = require("child_process");

commander.version("0.0.1")
	.option("-d, --dir [type]", "Project's directory path")
	.parse(process.argv);

console.log(commander.dir);

if(!commander.dir){
  commander.dir = ".";
}

child_process.exec("git clone https://github.com/Dzhakhar/YoptaReactBoilerplate.git " + commander.dir);
child_process.exec("cd " + commander.dir);

console.log("IT WORKS");
