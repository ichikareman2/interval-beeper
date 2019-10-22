# Interval Beeper

## Description:

An api for managing interval beeper model. It doesn't actually do anything besides provide functions to change the state of Interval Beeper. 

## How to use:

### With typescript, it could be something like this:
```
import { 
  IntervalBeeper, 
  createdDefault, 
  setInterval, 
  start 
} from 'interval-beeper';

// sets up new internal beeper state>
let state: IntervalBeeper = createDefault();
// sets interval of the beeper state
state = setInterval(state);
// starts interval of the beeper state.
state = start(state);
```

## About a the author:

I'm a noob trying to learn. Let's not talk unless its about a not very harsh criticism.




