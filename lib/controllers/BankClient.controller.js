"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClientController = void 0;
class BankClientController {
    bankClientService;
    constructor(bankClientService) {
        this.bankClientService = bankClientService;
    }
    async create(req, res) {
        try {
            const createBankClientDTO = req.body;
            const bankClient = await this.bankClientService.createUser(createBankClientDTO);
            res.send(bankClient);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async update(req, res) {
        try {
            const updateBankClientDTO = req.body;
            const bankClient = await this.bankClientService.createUser(updateBankClientDTO);
            res.send(bankClient);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async delete(req, res) {
        try {
            const deleteBankClientDTO = req.body;
            const bankClient = await this.bankClientService.deleteUser(deleteBankClientDTO);
            res.send(bankClient);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}
exports.BankClientController = BankClientController;
