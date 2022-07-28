"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSucursalDTO = exports.UpdateSucursalDTO = exports.CreateSucursalDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateSucursalDTO {
    name;
}
__decorate([
    (0, class_validator_1.Length)(4, 20)
], CreateSucursalDTO.prototype, "name", void 0);
exports.CreateSucursalDTO = CreateSucursalDTO;
class UpdateSucursalDTO {
    id;
    name;
}
__decorate([
    (0, class_validator_1.IsUUID)()
], UpdateSucursalDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.Length)(4, 20)
], UpdateSucursalDTO.prototype, "name", void 0);
exports.UpdateSucursalDTO = UpdateSucursalDTO;
class DeleteSucursalDTO {
    id;
}
__decorate([
    (0, class_validator_1.IsUUID)()
], DeleteSucursalDTO.prototype, "id", void 0);
exports.DeleteSucursalDTO = DeleteSucursalDTO;
