import {test} from 'node:test';
import assert from 'node:assert';
import buildFastify from '../src/app.js';
import dotenv from 'dotenv';
dotenv.config();

test('POST /users/:id/kyc', async (t) => {
  const app = await buildFastify();

  t.after(async () => {
    await app.close()
  });

  //create user
  const createUserResponse = await app.inject({
    method: 'POST',
    url: '/users',
    payload: {
      name: 'KYC User',
      email: `kycuser${Date.now()}@example.com`,
      password: 'password123'
    }
  });

  const userBody = JSON.parse(createUserResponse.body);
  const id = Number(userBody.id);
  console.log(id);

  // create KYC
  const response = await app.inject({
    method: 'POST',
    url: `/users/${id}`,
    payload: {
      aadharNo: "123412341234",
      panNo: "ABCDE1234F"
    }
  });

  assert.strictEqual(response.statusCode, 201, 'status should be 201');
  console.log(response.body);
  // const body = JSON.parse(response.body);
  // assert.strictEqual(body.message, 'KYC Created successfully' || body.message, 'should return success message');
});
