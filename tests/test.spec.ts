// import {createDefault} from '../src/index';
// const {createDefault, start, stopInterval: stop, setInterval} = require('../src/index');
import {IntervalBeeper, createDefault, setInterval, start, stop} from '../src/index'

const testState: IntervalBeeper = Object.freeze(createDefault());

test("Testing 'createDefault' function", () => {
  expect(createDefault()).toHaveProperty('beepStarted', false);
});

test('Testing setInterval() to change `intervalMilliseconds` only', () => {
  const newInterval = 3;
  const newState = setInterval(testState, newInterval);
  const toMilliseconds = (seconds: number) => seconds / 1000;
  expect(toMilliseconds(newState.intervalMilliseconds)).toBe(newInterval);
  expect(newState.beepStarted).toBe(testState.beepStarted);
  expect(newState.timeStarted).toBe(testState.timeStarted);
});

test('start() should set beepStarted', () => {
  const newState = start(testState);
  expect(newState.beepStarted).toBe(true);
  expect(newState.intervalMilliseconds).toBe(testState.intervalMilliseconds);
  expect(newState.timeStarted).toBe(testState.timeStarted);
});

test('stop() should set beepStarted', () => {
  const newState = stop(testState);
  expect(newState.beepStarted).toBe(false);
  expect(newState.intervalMilliseconds).toBe(testState.intervalMilliseconds);
  expect(newState.timeStarted).toBe(testState.timeStarted);
});
