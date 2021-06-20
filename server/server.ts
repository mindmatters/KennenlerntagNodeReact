import express from 'express';
import { PrismaClient } from "@prisma/client";
import morgan from 'morgan';
import cors from 'cors';

const app = express()
const prisma = new PrismaClient();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.get('/users/', (req: any, res: any) => {
    try {
        prisma.user.findMany().then((users) => {
            res.status(200).send(users);
        })
    } catch (error) {
        res.status(404).send('Error while finding users ' + error)
    }
})

app.post('/users/', (req: any, res: any) => {
    prisma.user.create({data: req.body})
    .then((user) => {
        res.status(200).send('Wrote : ' + JSON.stringify(user));
    })
    
});

app.listen(5000, () => {
    console.log('Server auf Port 5000 gestartet')
})
