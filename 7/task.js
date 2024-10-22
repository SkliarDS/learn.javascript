let obj = {
	a: 2,
	get f(){
		
	},
	set f(value){
		console.log('a:',this.a);
		this.a = value;
		console.log('set.f:',this.a);
	},
}
obj.f = 4