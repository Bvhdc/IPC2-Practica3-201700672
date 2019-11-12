"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajesController_1 = __importDefault(require("../controllers/mensajesController"));
class MensajesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mensajesController_1.default.listall);
        this.router.get('/:id', mensajesController_1.default.list);
        this.router.post('/', mensajesController_1.default.create);
        this.router.delete('/:id', mensajesController_1.default.delete);
        this.router.put('/:id', mensajesController_1.default.update);
    }
}
const mensajesRoutes = new MensajesRoutes;
exports.default = mensajesRoutes.router;
