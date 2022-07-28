"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBankClientDTO = exports.DeleteBankClientDTO = exports.CreateBankClientDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateBankClientDTO {
    name;
    sucursalId;
}
__decorate([
    (0, class_validator_1.Length)(4, 20)
], CreateBankClientDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)()
], CreateBankClientDTO.prototype, "sucursalId", void 0);
exports.CreateBankClientDTO = CreateBankClientDTO;
class DeleteBankClientDTO {
    id;
}
__decorate([
    (0, class_validator_1.IsUUID)()
], DeleteBankClientDTO.prototype, "id", void 0);
exports.DeleteBankClientDTO = DeleteBankClientDTO;
class UpdateBankClientDTO {
    id;
    name;
    sucursalId;
    basePrice;
    insurance;
    services;
    comissions;
}
__decorate([
    (0, class_validator_1.IsUUID)()
], UpdateBankClientDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.Length)(4, 20),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "sucursalId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "basePrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "insurance", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "services", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateBankClientDTO.prototype, "comissions", void 0);
exports.UpdateBankClientDTO = UpdateBankClientDTO;
