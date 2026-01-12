// import {test} from 'node:test';
// import assert from 'node:assert';
// import buildFastify from '../src/app.js';
// import dotenv from 'dotenv';
// dotenv.config();

// test('POST /users', async (t) => {
//     const app = buildFastify();
//     t.after(() => {
//         app.close();
//     });

//     const response = await app.inject({
//         method: 'POST',
//         url: '/users',
//         payload:{
//             name: 'testName',
//             email: `kycuser${Date.now()}@example.com`,
//             password: 'test12345'
//         }
//     });
//     console.log(response.body);
//     assert.strictEqual(response.statusCode, 201, 'status code should be 201');
// })