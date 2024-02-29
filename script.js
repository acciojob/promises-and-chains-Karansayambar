//your JS code here. If required.
let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click", (e) => {
	  let age = ageInput.value;
      let name = nameInput.value;
	e.preventDefault();
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`)
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	});
	promise
	.then((message) => {
	alert(message);
})
	.catch((err) => {
	alert(err);
})
})

