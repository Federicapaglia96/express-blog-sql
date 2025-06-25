//importo la connessione
import connection from "../db.js";

const index= (req, res) =>{
    //prelevo tutti i dati dal database
res.json({
    data: "array di post"
})
};

//SHOW prendo i dati di ogni singolo elemento
const show =(req, res)=>{
    const id = req.params.id;
    res.json({
    data: "post"
})

}

const controller = {
    index,
    show,
};

export default controller;