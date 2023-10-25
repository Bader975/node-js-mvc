import express, { Application, Express, Request, Response } from 'express';
import * as dotenv from "dotenv";
import { connectDB } from './config/db';
import path from 'path';
import RouterUser from './routes/user.route';

const app: Application = express();
const port = process.env.PORT ?? 3008;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
// DB connection 
connectDB();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname , 'public')));
// Main Router application
app.use('/', RouterUser);

// 404 handler 
app.get('/*', (req: Request, res: Response) => {
    res.render('404')
})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at PROT ==> ${port}`);
});