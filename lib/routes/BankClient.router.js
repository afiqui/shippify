"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_class_validator_1 = require("express-class-validator");
const BankClient_factory_1 = require("../factories/BankClient.factory");
const CreateBankClient_dto_1 = require("./dto/CreateBankClient.dto");
const router = (0, express_1.Router)();
const clientBankController = BankClient_factory_1.BankClientFactory.createBankClientController();
router.post('/', (0, express_class_validator_1.makeValidateBody)(CreateBankClient_dto_1.CreateBankClientDTO), (req, res) => {
    clientBankController.create(req, res);
});
exports.default = router;
