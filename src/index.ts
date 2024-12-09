import colors from "colors";
import server from "./server"

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.blue.bold(  `server lisening on port: ${port}  `) );

})

let productName = "tablet"
let isAuth = false
let price = 30

let product = {
    id: 1,
    price: 30,
    name: "tablet"
}

const numbers = [10 , 20, 30, 40 , 50]

type name = {
    num: number,
    
}
