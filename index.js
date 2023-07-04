import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import usersBooksRoute from "./routes/usersBooks.js"
import registerBookRoute from "./routes/registerBook.js"

/* data imports */
import UsersBook from "./models/UsersBook.js";
import { usersBookData } from "./data/index.js"
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";


/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( {policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
    express.urlencoded({ extended: true })
);
    


/* Routes */
app.use("/usersbooks", usersBooksRoute);
app.use("/registerabook", registerBookRoute);
// app.use("/management", managementRoutes);
// app.use("/sales", salesRoutes);

/* Mongoose Setup */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // UsersBook.insertMany(usersBookData)
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

    
})
.catch((error) => console.log(`${error} did not connect`));
