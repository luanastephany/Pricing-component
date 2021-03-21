//objetos annually e monthly com seus atributos
const prices = {
    annually: {
        basic: '$199.99',
        professional: '$249.99',
        master: '$399.99'
    },
    monthly: {
        basic: '$19.99',
        professional: '$24.99',
        master: '$39.99'
    }
}

//já começa no monthly
let plan = 'monthly'


//função para mudar os preços (mensal ou anual) de cada plano
function updateTexts() {
    const basic = document.getElementById('basic')
    const professional = document.getElementById('professional')
    const master = document.getElementById('master')

    //pega o texto usando a key ([chave]) do objeto (annually e monthly)
    basic.innerText = prices[plan].basic
    professional.innerText = prices[plan].professional
    master.innerText = prices[plan].master
}

//pega o switch do html e coloca um onclick nele
const botao = document.getElementById('switch')
botao.addEventListener('click', () => {

    //quando clicar, remove a classe referente ao plano anterior
    if (botao.classList.contains(plan)) {
        botao.classList.remove(plan)
    }

    /*if (plan === 'monthly') {
        plan = 'annually'
    } else {
        plan = 'monthly'
    }*/

    plan = plan === 'monthly' ? 'annually' : 'monthly'
    updateTexts()

    //depois que o plano mudar, adicionar o novo plano às classes
    botao.classList.add(plan)

})


