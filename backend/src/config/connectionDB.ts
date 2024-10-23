import db from "./db";


export const connectionDB = async () => {
    db.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos de postgress')

            db.sync({ alter: true })
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