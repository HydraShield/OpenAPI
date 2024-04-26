import { OpenAPIV3 } from "openapi-types";
import { applicationJson } from "./RequestContent";

const ResponseSchema200: OpenAPIV3.SchemaObject = {
  type: 'string',
  example: 'Welcome',
}

const ResponseSchema401: OpenAPIV3.SchemaObject = {
  type: 'string',
  example: 'Invalid Password',
}

const ResponseMedia200: OpenAPIV3.MediaTypeObject = {
  schema: ResponseSchema200
}

const ResponseMedia401: OpenAPIV3.MediaTypeObject = {
  schema: ResponseSchema401
}

const Response200: OpenAPIV3.ResponseObject = {
  content: {
    'application/json': ResponseMedia200
  },
  description: "Valid Cred"
}

const Response401: OpenAPIV3.ResponseObject = {
  content: {
    'application/json': ResponseMedia401
  },
  description: "Invalid Cred"
}


export const ResponseObject1: OpenAPIV3.ResponsesObject = {
  '200': Response200,
  '401': Response401
}


