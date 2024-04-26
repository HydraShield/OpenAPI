import { OpenAPIV3 } from "openapi-types";

const username: OpenAPIV3.NonArraySchemaObject = {
  type: 'string',
}

const password: OpenAPIV3.NonArraySchemaObject = {
  type: 'string',
  format: 'password',
  minLength: 6,
  maxLength: 12,
  pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$'
}

const properties = {
  username,
  password
}

const RequestSchema: OpenAPIV3.SchemaObject = {
  type: 'object',
  required: ['username', 'password'],
  properties
}

export const applicationJson: OpenAPIV3.MediaTypeObject = {
  schema: RequestSchema
}
