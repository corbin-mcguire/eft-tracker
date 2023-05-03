import { helloWorld } from "./helloworld.js";
import { log } from "./log.js";

export const commands = {
  [helloWorld.name]: helloWorld,
  [log.name]: log,
  // more commands here
};

export const commandList = Object.values(commands).map((command) => command.getCommand());
