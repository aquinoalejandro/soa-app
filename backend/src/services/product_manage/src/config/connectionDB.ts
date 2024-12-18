import db from "./db";
import "../models/product.model";


export const connectionDB = async () => {
    db.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos de postgress')

            db.sync({ force: true })
                .then( async () => {
                    console.log('Base de datos sincronizada');
                })
            
                .catch((err) => {
                    console.log(err);
                })

        })
        .catch( err => {
            console.log(err)
        })
}