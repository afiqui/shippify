"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const client_1 = require("@prisma/client");
class BaseRepository extends client_1.PrismaClient {
    prisma;
    constructor() {
        super();
        this.prisma = new client_1.PrismaClient();
    }
}
exports.BaseRepository = BaseRepository;
