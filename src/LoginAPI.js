"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLoginAPI = void 0;
var RequestContent_1 = require("./RequestContent");
var ResponseContent_1 = require("./ResponseContent");
var infoLoginAPI = {
    title: "API for Login System",
    version: "1.0.0"
};
var serverLoginAPI = [
    {
        url: "http://user.domain.com/api",
        description: "Server for User",
    },
    {
        url: "http://product.domain.com/api",
        description: "Server for Products",
    },
    {
        url: "http://sales.domain.com/api",
        description: "Server for Sales",
    },
];
var getLoginRequestBody = {
    required: true,
    content: {
        'application/json': RequestContent_1.applicationJson
    }
};
var getLoginOperation = {
    requestBody: getLoginRequestBody,
    responses: ResponseContent_1.ResponseObject1
};
var loginPath = {
    "post": getLoginOperation
};
var pathLoginAPI = {
    '/login': loginPath
};
exports.myLoginAPI = {
    openapi: "3.0.0",
    info: infoLoginAPI,
    servers: serverLoginAPI,
    paths: pathLoginAPI
};
