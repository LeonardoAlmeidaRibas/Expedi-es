import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async() => {
    try {
        await mongoose.connect(
          `mongodb+srv://LeonardoAlmeida:leoribas2007@cluster0.n65t3.mongodb.net/compras`
            // `mongoose.connect('mongodb+srv://<DB_USER>:<PASSWORD>i@<CLUSTER_NAME>/<COLLECTION_NAME>');`
        );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;