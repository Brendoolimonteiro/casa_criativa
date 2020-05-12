const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./projeto.db')

db.serialize(function()  {
    // Cria a tabela 
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         image TEXT,
         title TEXT,
         category TEXT,
         description TEXT,
         link TEXT
    );
`)

    //Inserir dados na tabela
    const query = `
    INSERT INTO ideas (
        image,
        title,
        category,
        description,
        link
    )    VALEUS (?,?,?,?,?);
    `
    console.log(query)

    const values = [
        "https://image.flaticon.com/icons/svg/2882/2882665.svg",
        "Criando em Primeiro lugar",
        "Estudos",
        "responsável pela implementação e correção de erros/defeitos no sistema",
        "https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    ]

    console.log(values)


    // db.run (query, values, function(err) {
       // if (err) return console.log(err)

      //  console.log(this)
  //  })
    
    //Consultar dados na tabela

    

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) return console.log (err)

        console.log("lista: ", rows)
    })

    //Deletar um dado da tabela 
})