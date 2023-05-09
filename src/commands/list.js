import { SlashCommandBuilder } from "discord.js";
import { getAllKills } from "../firebase.js";
import { Command } from "../models/command.js";

const command = new SlashCommandBuilder().setName("list").setDescription("Returns all kills").toJSON();

const commandHandler = async (interaction) => {
  try {
    const allKills = await getAllKills();
    if (allKills) {
      let allKillsString = "";
      Object.keys(allKills).forEach((name) => {
        allKillsString += `${name} has been killed by: ${allKills[name].killedBy}\n`;
      });

      interaction.reply({ content: allKillsString });
    }
  } catch (error) {
    console.error(error);
    interaction.reply({ content: "There was a problem getting all kills" });
  }
};

export const list = new Command("list", command, commandHandler);
