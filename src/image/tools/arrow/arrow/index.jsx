import React from 'react';
import {fabric} from 'fabric';
import { useStore } from '../../../store';

export const Arrow = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);

  function draw(){
    console.info('===> drawing');
    if(ref.current){
    var triangle = new fabric.Triangle({
      width: 10, 
      height: 15, 
      fill: 'red', 
      left: 235, 
      top: 65,
      angle: 90
  });

  var line = new fabric.Line([50, 100, 200, 100], {
      left: 75,
      top: 70,
      stroke: 'red'
  });

  var objs = [line, triangle];

  var alltogetherObj = new fabric.Group(objs);
  ref.current.add(alltogetherObj);
    }
  }
  return (
 <button onClick={draw}>Arrow</button>   
  )
}