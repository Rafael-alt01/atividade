let feedbacks = document.getElementById('feedbacks')

function carregarContainer() {

feedbacks.innerHTML = ''

for (let i = 0; i < titulos.length; i++) {

feedbacks.innerHTML += `
<div class="col-lg-3 col-md-4 col-6 mb-5 pb-5">
    <div class="card h-100 shadow">
        <div class="card-body bg-lumin">
            <h5 class="py-3">${titulos[i]}</h5>
            <hr>
            <p>${frases[i]}</p>
        </div>
    </div>
</div>
`
}
}
carregarContainer()