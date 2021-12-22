async function getRandomUser(){
    const response = await fetch('https://api.randomuser.me/?results=10')
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}
function displayUser(user){
    const name = document.getElementById('name')
    const lastName = document.getElementById('sobrenome')
    const city = document.getElementById('cidade')
    const age = document.getElementById('idade')
    const foto = document.getElementById('image')

    name.innerText = `${user.name.first}`
    sobrenome.innerText = `${user.name.last}`
    idade.innerText = `${user.dob.age}`
    cidade.innerText = `${user.location.city}`
    image.setAttribute('src',`${user.picture.large}`)
}
getRandomUser();