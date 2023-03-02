import { IsString, IsInt } from 'class-validator';
import Position from './PositionEnum';

export default class Player {

@IsString()
name: string;

@IsInt()
age: number;

@IsInt()
position: Position;

@IsInt()
numberId: number;

}
