import { OpenAPIV3 } from "openapi-types"
import { applicationJson } from "./RequestContent"
import { ResponseObject1 } from "./ResponseContent"

const infoLoginAPI: OpenAPIV3.InfoObject = {
  title: "API for Login System",
  version: "1.0.0"
}

const serverLoginAPI: OpenAPIV3.ServerObject[] = [
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
]

const getLoginRequestBody: OpenAPIV3.RequestBodyObject = {
  required: true,
  content: {
    'application/json': applicationJson
  }
}

const getLoginOperation: OpenAPIV3.OperationObject = {
  requestBody: getLoginRequestBody,
  responses: ResponseObject1
}

const loginPath: OpenAPIV3.PathItemObject = {
  "post": getLoginOperation
}

const pathLoginAPI: OpenAPIV3.PathsObject = {
  '/login': loginPath
};

export const myLoginAPI: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: infoLoginAPI,
  servers: serverLoginAPI,
  paths: pathLoginAPI
}
