import { IsInt, IsString, ValidateNested } from 'class-validator';
import  Player  from './Player';

export default class Team {

@IsString()
name: string;

@IsInt()
score: number;

@ValidateNested({ each: true })
players: Player[];

}
