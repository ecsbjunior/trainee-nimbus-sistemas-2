```ts
// HTTP - Hypertext Transfer Protocol
// Protocolo - Formatação Pré Definida (Padrão a ser seguido)
// HTTP 1.1
// METHOD (GET, POST, PUT, PATCH, DELETE)
// ENDPOINT (/users, /orders, /auth, /stock/groups-types)
// HTTP 1.1

//HEADERS
/**
 * Content-Type - Tipo de conteudo que estamos trafegando
 * text/plain
 * application/json
 * text/html
 * multipart/form-data
 */

//BODY
/**
 * {
 *  "name": "evandro"
 * }
 */

/**
 * GET /users HTTP/1.1
 * Host: localhost:3333
 * Content-Type: 'application/json'
 * 
 * {"mensagem":"Evandro"}
 */

/**
 * METHODS
 * Get -> Retornar informações de um determinado recurso
 * Post -> Criar um recurso no sistemas
 * Put -> Atualizar varias informações de um recurso
 * Patch -> Atualizar uma informação especifica
 * Delete -> Delete um determinado recurso
 */

/**
 * Route Params -> GET /users/:id
 * Query Params -> GET /users?username=dro&name=eva
 * Body         -> POST { "username": "evandro", "name": "Evandro Junior" }
 */
```