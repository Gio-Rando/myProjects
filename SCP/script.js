const form = document.querySelector("form")
const search = document.querySelector("input")
const h1 = document.querySelector("h1")
const img = document.querySelector("img")

const getData = async () => {
    const url = './scp-api/docs/data/scp/items/index.json'
    const respose = await fetch(url)
    if (!respose.ok) {
        throw new Error("crazy")
    }
    return await respose.json()
}


form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const data = await getData()
    console.log(data[`SCP-${search.value.padStart(3,"0")}`])
    console.log(data[`SCP-${search.value.padStart(3,"0")}`].images)
    h1.textContent = `SCP-${search.value.padStart(3,"0")}`
    img.src = data[`SCP-${search.value.padStart(3,"0")}`].images[0]
})

const gtData = async () => {
    const url = 'https://scp-wiki.wikidot.com/scp-049'
    const respose = await fetch(url)
    return await respose.json()
}


form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const data = await gtData()
    console.log(data)    
})


