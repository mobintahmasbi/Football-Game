import Player from "../models/Player";
import BaseRepository from "../utils/JsonOperation";

class PlayerRepository extends BaseRepository<Player> {

    constructor(){

        super("./src/models/data/Players.json")

    }
}

export default PlayerRepository;
