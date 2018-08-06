import {
  makePoint, getX, getY, toString as pointToString,
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';


export const makeSegment = (pointStart, pointEnd) => {
  return cons(pointStart, pointEnd);
};

export const startSegment = makeSegment => car(makeSegment);

export const endSegment = makeSegment => cdr(makeSegment);

export const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
export const midpointSegment = segment => makePoint((car(car(segment)) + car(cdr(segment))) / 2, (cdr(car(segment)) + cdr(cdr(segment))) / 2);

