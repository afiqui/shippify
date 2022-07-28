"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClientService = void 0;
const uuidv4_1 = require("uuidv4");
class BankClientService {
    bankClientRepository;
    constructor(bankClientRepository) {
        this.bankClientRepository = bankClientRepository;
    }
    async createUser(createBankClientDTO) {
        const userId = (0, uuidv4_1.uuid)();
        return await this.bankClientRepository.createUser(userId, createBankClientDTO.name, createBankClientDTO.sucursalId);
    }
    async updateUser(updateUserDTO) {
        return await this.bankClientRepository.updateUser(updateUserDTO);
    }
    async deleteUser(deleteBankClientDTO) {
        return await this.bankClientRepository.deleteUser(deleteBankClientDTO.id);
    }
}
exports.BankClientService = BankClientService;
