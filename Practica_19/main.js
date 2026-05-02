const personContainter = document.querySelectorAll("figure");
let activeElement;

personContainter.forEach((element) => {
	element.addEventListener("mouseenter", changeActive);
	if (element.className == "activeItem") activeElement = element;
});

function changeActive() {
	console.log("changed");
	activeElement.classList.toggle("activeItem");
	this.classList.toggle("activeItem");
	activeElement = this;
}

const loadRandomUsers = async () => {
  try {
    

	for(let i of personContainter){
		const res = await fetch("https://randomuser.me/api");
    	const data = await res.json();
		
		console.log(data);
		const user=data.results[0];

		
		i.querySelector("img").src=user.picture.large;

		i.querySelector("h2").innerText=`
		${user.name.title} ${user.name.first} ${user.name.last}`;

		i.querySelectorAll("p")[0].innerText=`
		${user.location.country},${user.location.state},${user.location.city}`;

		i.querySelectorAll("p")[1].innerText=user.cell;
	}
	
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadRandomUsers();