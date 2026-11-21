import test from 'node:test';
import assert from 'node:assert/strict';
import {randomBytes} from 'node:crypto';
import {decodeRoomMapLink,encodeRoomMapLink,receiveMapFragment,splitRoomMap} from '../gorilla-lab/room-map-link.js';
import {mostlyInRectangle} from '../gorilla-lab/marquee-selection.js';

test('room transfer accepts maps that exceed the former 40-fragment limit',async()=>{
  const map={name:'Grande carte',texture:randomBytes(220_000).toString('base64')};
  const encoded=await encodeRoomMapLink(map,true);
  const fragments=splitRoomMap(encoded);
  assert.ok(fragments.length>40);
  const transfer={};
  for(const frame of fragments.slice(1).reverse())assert.equal(receiveMapFragment(frame,transfer),null);
  const count=transfer.fragments.size;
  assert.equal(receiveMapFragment(fragments.at(-1),transfer),null);
  assert.equal(transfer.fragments.size,count);
  const reassembled=receiveMapFragment(fragments[0],transfer);
  assert.deepEqual(JSON.parse(await decodeRoomMapLink(reassembled,500_000)),map);
});

test('marquee requires strictly more than half of the projected area',()=>{
  const square=[[0,0],[0,10],[10,0],[10,10]];
  for(const [right,expected] of [[4.9,false],[5,false],[5.1,true],[10,true]]){
    assert.equal(mostlyInRectangle(square,{left:0,top:0,right,bottom:10}),expected);
  }
  const diamond=[[5,0],[10,5],[5,10],[0,5]];
  assert.equal(mostlyInRectangle(diamond,{left:3,top:3,right:7,bottom:7}),false);
  assert.equal(mostlyInRectangle(diamond,{left:1,top:1,right:9,bottom:9}),true);
});
