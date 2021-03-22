// ES5
const CounterV1 = {
	count: 0,
	counter: function counter() {
		setInterval(() => console.log(++this.count), 1000);
	}
};
CounterV1.counter();