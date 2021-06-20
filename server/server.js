"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var prisma = new client_1.PrismaClient();
app.use(morgan_1.default('combined'));
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/users/', function (req, res) {
    try {
        prisma.user.findMany().then(function (users) {
            res.status(200).send(users);
        });
    }
    catch (error) {
        res.status(404).send('Error while finding users ' + error);
    }
});
app.post('/users/', function (req, res) {
    prisma.user.create({ data: req.body })
        .then(function (user) {
        res.status(200).send('Wrote : ' + JSON.stringify(user));
    });
});
app.listen(5000, function () {
    console.log('Server auf Port 5000 gestartet');
});
