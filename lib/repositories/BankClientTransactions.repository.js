"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClientTransactionsRepository = void 0;
const BaseRepository_repository_1 = require("./BaseRepository.repository");
class BankClientTransactionsRepository extends BaseRepository_repository_1.BaseRepository {
    constructor() {
        super();
    }
    async addTransaction(id, userId, type, amount) {
        return await this.bankClientTransactions.create({
            data: {
                id,
                clientId: userId,
                type,
                amount
            }
        });
    }
    async getTransactions(userId) {
        return await this.bankClientTransactions.findMany({
            where: {
                clientId: userId
            }
        });
    }
}
exports.BankClientTransactionsRepository = BankClientTransactionsRepository;
