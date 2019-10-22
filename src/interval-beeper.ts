/**
 * Model of interval beeper state
 */
export interface IntervalBeeper {
  /** indicator whether interval has started */
  beepStarted: boolean;
  /** timestamp when the interval started */
  timeStarted?: number;
  /** milliseconds between every beep */
  intervalMilliseconds: number; 
}
/**
 * Creates default state.
 * @param state - current state to apply changes to
 * @returns {IntervalBeeper} new default state;
 */
export function createDefault (state?: IntervalBeeper) : IntervalBeeper {
  return {
    ...state,
    beepStarted: false,
    timeStarted: undefined,
    intervalMilliseconds: 4000
  }
}
/**
 * Changes state to start.
 * @param state {IntervalBeeper} - current state to apply changes to.
 * @returns {IntervalBeeper} updated state in started state
 */
export function start (state: IntervalBeeper) : IntervalBeeper {
  return {
    ...state,
    beepStarted: true
  }
}
/**
 * Changes state to stopped state.
 * @param state - current state to apply changes to.
 * @returns {IntervalBeeper} Updated state in stopped state.
 */
export function stop (state: IntervalBeeper): IntervalBeeper {
  return {
    ...state,
    beepStarted: false
  }
}
/**
 * Sets interval in the state.
 * @param state {IntervalBeeper} current state to apply changes to.
 * @param intervalSeconds {number} seconds to set for the beeps.
 */
export function setInterval (state: IntervalBeeper, intervalSeconds: number): IntervalBeeper {
  return {
    ...state,
    intervalMilliseconds: 1000 * intervalSeconds
  }
}
