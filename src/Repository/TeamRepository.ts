import Team from "../models/Team";
import BaseRepository from "../utils/JsonOperation";

class TeamRepository extends BaseRepository<Team> {

    constructor(){

        super("../models/data/Teams.json")

    }
}

export default TeamRepository;
