// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2882/2882665.svg",
        title: "Criando em Primeiro lugar",
        category: "Estudos",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2911/2911789.svg",
        title: "Praticando e Apreendendo",
        category: "Apreendizagem",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2910/2910591.svg",
        title: "Construção Leva Tempo e Dedicação",
        category: "Tempo",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
    {
        img: "https://www.flaticon.com/br/premium-icon/icons/svg/901/901002.svg",
        title: "Praticando",
        category: "Mental",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2490/2490421.png",
        title: "Criatividade",
        category: "Conseguencia",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
    {
        img: "https://image.flaticon.com/icons/png/512/897/897066.png",
        title: "Future Technology",
        category: "Nunca tem Fim",
        description: "responsável pela implementação e correção de erros/defeitos no sistema",
        url:"https://www.youtube.com/channel/UCLex0lUgcTO1736GBv5Vctg?view_as=subscriber"
    },
]
 

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,   // boolean
})

//criei uma rota/
// e capturo o pedido do cliente para responder
server.get("/", function(req, res)  {

    const reverseIdeas = [...ideas].reverse()
    
    let lastIdeas = []
    for (let idea of reverseIdeas) {
          if(lastIdeas.length < 2){
          lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res)  {

    const reverseIdeas = [...ideas].reverse()

    return res.render ("ideias.html", { ideas: reverseIdeas})
})
// liguei meu servidor na porta 3000
server.listen(3001)