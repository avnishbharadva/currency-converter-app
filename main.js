const populate = (base, value) => {
    const url = "https://api.currencyapi.com/v3/latest?                     apikey=cur_live_amLUC70aocLM8RhqtQS8wx73Te21SN3e2Iu67VjZ&base_currency="
}

const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const crnc = document.querySelector("select[name='currency']").value;
    console.log(value, crnc)
    populate()
})

const tableBody = document.querySelector('tbody')
tableBody.innerHTML = `
    <td>hbf</td>
`