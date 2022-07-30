const express = require("express")
const data = require("./data")

const { v4 : idCV } = require("uuid")

const app = express()

app.use(express.json())



app.post("/create", (req, res) => {
    console.log(req)
    data.push({...req.body, id : idCV() })

    return res.status(201).json("seu documento foi criado")
})

app.get("/read", (req, res) => {
    return res.status(200).json(data)
})

app.get("/details/:id", (req, res) => {

    const { id } = req.params
    console.log(req.params)

    const document = data.filter((current) => current.id === id)

    return res.status(200).json(document[0])
})

app.put("/edit", (req, res) => {

    const { id } = req.params

    data.forEach((current, i) => {
        if (current.id === id) {
            data[i] = {...req.body, id: current.id}
        }
    })

    const newDocument = data.filter((currentDocument) => {
        currentDocument.id === id
    })

    return res.status(200).json(newDocument[0])


})







app.listen(4000, () => {
    console.log("Servidor rodando bonitinho aqui na 4000")
})