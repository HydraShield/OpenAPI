"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseObject1 = void 0;
var ResponseSchema200 = {
    type: 'string',
    example: 'Welcome',
};
var ResponseSchema401 = {
    type: 'string',
    example: 'Invalid Password',
};
var ResponseMedia200 = {
    schema: ResponseSchema200
};
var ResponseMedia401 = {
    schema: ResponseSchema401
};
var Response200 = {
    content: {
        'application/json': ResponseMedia200
    },
    description: "Valid Cred"
};
var Response401 = {
    content: {
        'application/json': ResponseMedia401
    },
    description: "Invalid Cred"
};
exports.ResponseObject1 = {
    '200': Response200,
    '401': Response401
};
