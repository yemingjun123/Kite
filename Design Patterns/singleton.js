function Singleton() {
	if (!Singleton.instance) {
		Singleton.instance = {
			name : "yt"
		};
	}
	return Singleton.instance;
}


var obj1 = new Singleton();

var obj2 = new Singleton();

console.log(obj1==obj2);

console.log(obj1.name);