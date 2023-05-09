import { SlashCommandBuilder } from "discord.js";
import { Command } from "../models/command.js";

const command = new SlashCommandBuilder()
  .setName("find")
  .setDescription("Finds a provided player name if it exists")
  .addStringOption((option) =>
    option.setName("name").setDescription("The name of the player to search for").setRequired(true),
  )
  .toJSON();

const commandHandler = async (interaction) => {
  try {
    interaction.reply({ content: "WIP" });
  } catch (error) {
    console.error(error);
    interaction.reply({ content: "There was a problem running this command" });
  }
};

export const find = new Command("find", command, commandHandler);
