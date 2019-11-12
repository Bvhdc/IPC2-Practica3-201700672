"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ChatsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const users = yield database_1.default.query('Select Chat.idChat,t1.NombreUsuario as UsuarioEnvio,t2.NombreUsuario as UsuarioReceptor from Chat inner join Usuarios t1 on t1.idUsuario=Chat.idUsuarioEnvio inner join Usuarios t2 on t2.idUsuario=Chat.idUsuarioReceptor where t1.NombreUsuario= ? or t2.NombreUsuario= ? ', [id, id]);
            res.json(users);
        });
    }
    listall(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('Select Chat.idChat,t1.NombreUsuario as UsuarioEnvio,t2.NombreUsuario as UsuarioReceptor from Chat inner join Usuarios t1 on t1.idUsuario=Chat.idUsuarioEnvio inner join Usuarios t2 on t2.idUsuario=Chat.idUsuarioReceptor');
            res.json(users);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Chat set ?', [req.body]);
            res.json({ message: 'Chat Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete FROM Chat WHERE idChat= ?', [id]);
            res.json({ message: 'Chat deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Usuarios set ? WHERE idUsuario= ?', [req.body, id]);
            res.json({ text: 'User Updated' });
        });
    }
}
const chatsController = new ChatsController();
exports.default = chatsController;
