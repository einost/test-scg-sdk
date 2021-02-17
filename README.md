# test-scg-sdk (Dependency of scg service)

The library of test scg service for find database with [Mongoose](https://github.com/Automattic/mongoose). This project has repositories as below.

- [test-scg-client](https://github.com/einost/test-scg-client) (Nuxt.js)
- [test-scg-service](https://github.com/einost/test-scg-service) (Hapi.js)
- [test-scg-service-draft](https://github.com/einost/test-scg-service-draft) (Express.js)
- [test-scg-sdk](https://github.com/einost/test-scg-sdk) (Dependency of scg service)

## `DB Model (Query data)`

- Admin
- Product
- Stock
- VendingMachine

## `Constants Model (Description of number on database)`

- AdminRole
- VendingMachineStatus

## `Utils`
- Logger
- Email

## `Usage`

```js
const { Constants, DB, Utils } = require('test-scg-sdk')

Constants.model.key
// example
// Constants.VendingMachineStatus.ONLINE

DB.model.method(query)
// example
// DB.Product.findOne({ _id: '...' })

Utils.model.method(params)
// example
// Utils.Email.send({ from, to, subject, text, html })
```