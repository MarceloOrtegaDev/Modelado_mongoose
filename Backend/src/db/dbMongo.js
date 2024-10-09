import mongoose from "mongoose";
const url = "mongodb://localhost:27017/empresa"

export const connection = async (_req, res) => {
    try {
        await mongoose.connect(url)
        res.send("Te has conectado a la base de datos Url");
    } catch (error) {
        res.status(500).json("Error al conectarte a la base de datos")
    }
}
