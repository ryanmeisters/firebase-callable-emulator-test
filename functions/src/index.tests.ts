import test from 'ava';
import * as fbtest from '@firebase/testing';

const testApp = fbtest.initializeTestApp({
  projectId: "testproject-dbefa",
  // If we comment the following line, it works!
  auth: { uid: "alice", email: "alice@example.com" }
});
const testFunctions = testApp.functions();
testFunctions.useFunctionsEmulator("http://localhost:5001")

test('we are able to call the callable function', async t => {
  const result = await testFunctions.httpsCallable("helloCallable")({});
  t.deepEqual(result.data, { hello: "world" });
});
