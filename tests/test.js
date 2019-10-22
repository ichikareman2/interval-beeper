// import {createDefault} from '../src/index';
const {createDefault} = require('../src/index')

console.log(createDefault)
test("Testing 'createDefault' function", () => {

  expect(createDefault()).toHaveProperty('beepStarted', false);
  // expect(scream("Hello world.")).toBe("HELLO WORLD!!!");
  // expect(scream("How are you?")).toBe("HOW ARE YOU?!");

});

// test("Testing 'addExclamationPoints' function", () => {

//   expect(addExclamationPoints("Hey.")).toBe("Hey!!!");
//   expect(addExclamationPoints("How old are you?")).toBe("How old are you?!");
//   expect(addExclamationPoints("Foo")).toBe("Foo");

// });