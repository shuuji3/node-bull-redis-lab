#!/usr/bin/env node
const path = require('path');
const Queue = require('bull');

const taskQueue = new Queue('task', 'redis://redis');
const externalQueue = new Queue('external', 'redis://redis');

taskQueue.process(({data}, done) => {
  console.log('[task] 🔧 process job...');
  console.log('[task] data:', data);
  done();
});

externalQueue.process(path.resolve('external.js'));

for (let i = 0; i < 5; i++) {
  const task = {name: `task-${i}`, value: i * i};
  taskQueue.add(task);
  externalQueue.add(task);
}
