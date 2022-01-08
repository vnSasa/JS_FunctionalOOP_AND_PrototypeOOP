function show(array) {
	console.log(array);
}

function devide() {
	console.log('----------');
}

function Robot() {
	var self = this;

	self.nameRobot = 'Robot';
	self.workRobot = 'I`m just working';
}

	Robot.prototype.setNameRobot = function(value) {
		this.nameRobot = value;
	}

	Robot.prototype.getNameRobot = function() {
		return this.nameRobot;
	}

	Robot.prototype.setWorkRobot = function(value) {
		this.workRobot = value;
	}

	Robot.prototype.getWorkRobot = function() {
		return this.workRobot;
	}

	Robot.prototype.work = function() {
		console.log(this.getNameRobot() + ' - ' + this.getWorkRobot());
	}

function CoffeRobot() {
	var self = this;
	self.setNameRobot('CoffeRobot');
	self.setWorkRobot('I`m just make coffee');
}

function RobotDancer() {
	var self = this;
	self.setNameRobot('RobotDancer');
	self.setWorkRobot('I`m just dance');
}

function RobotCoocker(name, work) {
	var self = this;
	self.setNameRobot('RobotCoocker');
	self.setWorkRobot('I`m just cooking');
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var robot = new Robot();
var coffeRobot = new CoffeRobot();
var robotDancer = new RobotDancer();
var robotCoocker = new RobotCoocker();

let robots = [];
robots.push(robot, coffeRobot, robotDancer, robotCoocker);
for (let i = 0; i < robots.length; i++) {
	show(robots[i].work());
	devide();
}