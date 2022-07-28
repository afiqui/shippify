"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClientRepository = void 0;
const BaseRepository_repository_1 = require("./BaseRepository.repository");
class BankClientRepository extends BaseRepository_repository_1.BaseRepository {
    constructor() {
        super();
    }
    async createUser(id, name, sucursalId) {
        return await this.bankClient.create({
            data: {
                id,
                name,
                sucursalId,
            }
        });
    }
    async getUser(id) {
        return await this.bankClient.findFirst({
            where: {
                id
            }
        });
    }
    async getUsers() {
        return await this.bankClient.findMany();
    }
    async updateUser(updateUserDTO) {
        return await this.bankClient.update({
            data: updateUserDTO,
            where: {
                id: updateUserDTO.id
            },
        });
    }
    async deleteUser(id) {
        return await this.bankClient.update({
            data: {
                deletedAt: new Date()
            },
            where: {
                id
            }
        });
    }
}
exports.BankClientRepository = BankClientRepository;
