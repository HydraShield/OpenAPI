"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationJson = void 0;
var username = {
    type: 'string',
    format: 'email',
};
var password = {
    type: 'string',
    format: 'password',
    minLength: 6,
    maxLength: 12,
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$'
};
var properties = {
    username: username,
    password: password
};
var RequestSchema = {
    type: 'object',
    properties: properties
};
exports.applicationJson = {
    schema: RequestSchema
};
