"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const shop_service_1 = require("./shop.service");
const sign_1 = require("../../utils/sign");
let ShopController = class ShopController {
    constructor(shopService, configService) {
        this.shopService = shopService;
        this.configService = configService;
    }
    async shopCreate() {
        try {
            const res = await this.shopService.shopCreate();
            if (res.status === 200) {
                return res.data;
            }
            return res === null || res === void 0 ? void 0 : res.data;
        }
        catch (error) {
            console.error('controller--error', error);
            return {
                code: 500,
                message: error,
            };
        }
    }
    async shopQuery(req) {
        try {
            const res = await this.shopService.shopQuery('');
            if (res.status === 200) {
                return res.data;
            }
            return res === null || res === void 0 ? void 0 : res.data;
        }
        catch (error) {
            console.error('controller--error', error);
            return {
                code: 500,
                message: error,
            };
        }
    }
    async shopStatusCallback(formData) {
        try {
            const clientSign = formData.sign;
            delete formData.sign;
            const appSecret = this.configService.get('MEITUAN_APP_SECRET');
            const sign = (0, sign_1.generateSign)(formData, appSecret);
            console.log('formData::', formData, sign === clientSign);
            let resData = sign === clientSign
                ? { code: 0, message: '接口请求成功' }
                : { code: 500, message: '接口请求失败' };
            return resData;
        }
        catch (error) {
            return {
                code: 500,
                message: error,
            };
        }
    }
};
exports.ShopController = ShopController;
__decorate([
    (0, common_1.Get)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "shopCreate", null);
__decorate([
    (0, common_1.Get)('query'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "shopQuery", null);
__decorate([
    (0, common_1.Post)('status/callback'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "shopStatusCallback", null);
exports.ShopController = ShopController = __decorate([
    (0, common_1.Controller)('shop'),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        config_1.ConfigService])
], ShopController);
//# sourceMappingURL=shop.controller.js.map