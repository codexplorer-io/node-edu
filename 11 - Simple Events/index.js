const EventEmitter = require('events');
const events = new EventEmitter();

events.on('engineOn', () => {
    console.log('Car engine is turned on.');
    events.emit('driving', 10, true);
});

events.on('driving', (speed, speeding) => {
    console.log(`Car is driving ${speed} kilometers per hour.`);

    speed = (speeding ? speed * 2 : speed / 2);

    const willStop = !speeding && speed < 10;
    if (willStop) {
        events.emit('stopped');
        return;
    }

    const willStartSlowing = speeding && speed > 100;
    if (willStartSlowing) {
        speeding = false;
    }

    events.emit('driving', speed, speeding);
});

events.on('stopped', () => {
    console.log('Car has stopped.');
    events.emit('engineOff');
});

events.on('engineOff', () => console.log('Car engine is turned off.'));

events.emit('engineOn');
