"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatsController_1 = __importDefault(require("../controllers/chatsController"));
class ChatsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', chatsController_1.default.listall);
        this.router.get('/:id', chatsController_1.default.list);
        this.router.post('/', chatsController_1.default.create);
        this.router.delete('/:id', chatsController_1.default.delete);
        this.router.put('/:id', chatsController_1.default.update);
    }
}
const chatsRoutes = new ChatsRoutes;
exports.default = chatsRoutes.router;
