export interface IntervalBeeper {
  beepStarted: boolean;
  timeStarted?: number;
  intervalMilliseconds: number; 
}

export function createDefault (state?: IntervalBeeper) : IntervalBeeper {
  return {
    ...state,
    beepStarted: false,
    timeStarted: undefined,
    intervalMilliseconds: 4000
  }
}

export function start (state: IntervalBeeper) : IntervalBeeper {
  return {
    ...state,
    beepStarted: true
  }
}

export function stop (state: IntervalBeeper): IntervalBeeper {
  return {
    ...state,
    beepStarted: false
  }
}

export function setInterval (state: IntervalBeeper, intervalSeconds: number): IntervalBeeper {
  return {
    ...state,
    intervalMilliseconds: 1000 * intervalSeconds
  }
}
