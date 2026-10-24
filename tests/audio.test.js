import test from 'node:test';import assert from 'node:assert/strict';
import {QueueManager} from '../src/audio/QueueManager.js';
import {fmt,esc} from '../src/ui/helpers.js';
test('queue moves forward, stops, and restarts with repeat all',()=>{const q=new QueueManager(['a','b']);assert.equal(q.current(),'a');assert.equal(q.next(),'b');assert.equal(q.next(),null);q.repeat='all';assert.equal(q.next(),'a');});
test('repeat cycles correctly',()=>{const q=new QueueManager();assert.equal(q.cycleRepeat(),'all');assert.equal(q.cycleRepeat(),'one');assert.equal(q.cycleRepeat(),'off');});
test('previous and queue reset',()=>{const q=new QueueManager(['a','b','c']);q.next();q.previous();assert.equal(q.current(),'a');q.setQueue(['x','y'],'y');assert.equal(q.current(),'y');});
test('time formatting',()=>{assert.equal(fmt(125),'2:05');assert.equal(fmt(NaN),'0:00');});
test('escaped content is safe as markup',()=>{assert.equal(esc('<script>'), '&lt;script&gt;');});
