"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClientFactory = void 0;
const BankClient_controller_1 = require("../controllers/BankClient.controller");
const BankClient_repository_1 = require("../repositories/BankClient.repository");
const BankClient_service_1 = require("../services/BankClient.service");
class BankClientFactory {
    static createBankClientController() {
        const bankClientRepository = new BankClient_repository_1.BankClientRepository();
        const bankClientService = new BankClient_service_1.BankClientService(bankClientRepository);
        return new BankClient_controller_1.BankClientController(bankClientService);
    }
}
exports.BankClientFactory = BankClientFactory;
