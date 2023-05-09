import { find } from "./find.js";
import { helloWorld } from "./helloworld.js";
import { list } from "./list.js";
import { log } from "./log.js";

export const commands = {
  [helloWorld.name]: helloWorld,
  [log.name]: log,
  [list.name]: list,
  [find.name]: find,
  // more commands here
};

export const commandList = Object.values(commands).map((command) => command.getCommand());
