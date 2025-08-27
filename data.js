let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let box = document.getElementById("box");


fetch('https://restcountries.com/v3.1/all?fields=name')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        data.forEach((item => {
            console.log(item)
            let nameCountry = document.createElement("div")

            nameCountry.innerHTML = `
            <img src="" alt="">
            <p>${item.common}</p>
            `

            nameCountry.textContent = item.name.common


            box.appendChild(nameCountry)
        }))
    })



btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})