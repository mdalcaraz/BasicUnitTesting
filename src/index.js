import app from "./app.js";
import 'dotenv/config'

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${process.env.PORT}`);
})