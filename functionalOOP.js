function Robot() {
	var self = this;

	self.nameRobot = 'Robot';
	self.workRobot = 'I`m just working';

	self.setNameRobot = function(value) {
		self.nameRobot = value;
	}

	self.getNameRobot = function() {
		return self.nameRobot;
	}

	self.setWorkRobot = function(value) {
		self.workRobot = value;
	}

	self.getWorkRobot = function() {
		return self.workRobot;
	}

	self.work = function() {
		console.log(self.getNameRobot() + ' - ' + self.getWorkRobot());
	}

}

function CoffeRobot() {
	Robot.call(this);
	var self = this;
	self.setNameRobot('CoffeRobot');
	self.setWorkRobot('I`m just make coffee');
}

function RobotDancer() {
	Robot.call(this);
	var self = this;
	self.setNameRobot('RobotDancer');
	self.setWorkRobot('I`m just dance');
}

function RobotCoocker(name, work) {
	Robot.call(this);
	var self = this;
	self.setNameRobot('RobotCoocker');
	self.setWorkRobot('I`m just cooking');
}

function show(array) {
	console.log(array);
}

function devide() {
	console.log('----------');
}

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