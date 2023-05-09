"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __importDefault(require("./Client"));
var Order_1 = __importDefault(require("./Order"));
var OrderItem_1 = __importDefault(require("./OrderItem"));
var client = new Client_1.default('João');
var sandwich = new OrderItem_1.default('Sanduíche Natural', 5.00);
var juice = new OrderItem_1.default('Suco de Abacaxi', 5.00);
var dessert = new OrderItem_1.default('Gelatina de Uva', 2.50);
var order = new Order_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
