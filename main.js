const populate = async (value, crnc) => {
    let mystr = ""
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_amLUC70aocLM8RhqtQS8wx73Te21SN3e2Iu67VjZ&base_currency=" + crnc
    let res = await fetch(url)
    let rjson = await res.json()
    console.log(rjson)

    for(let key of Object.keys(rjson["data"])){
        mystr += `<tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${rjson["data"][key]["value"] * value}</td>
                  </tr>
                 `
    }
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = mystr
}

const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const crnc = document.querySelector("select[name='currency']").value;
    // console.log(value, crnc)
    populate(value, crnc)
})

