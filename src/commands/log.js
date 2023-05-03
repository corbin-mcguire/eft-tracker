import { SlashCommandBuilder } from "discord.js";
import { logKill } from "../firebase.js";
import { Command } from "../models/Command.js";

const command = new SlashCommandBuilder()
  .setName("log")
  .setDescription("Logs your kill")
  .addStringOption((option) =>
    option.setName("name").setDescription("The name of the player you killed").setRequired(true)
  )
  .toJSON();

const commandHandler = async (interaction) => {
  try {
    logKill(interaction.user.id, interaction.user.tag, interaction.options.getString("name").trim());
    interaction.reply({
      content: "Kills has been logged. So far this player has been killed () times by us",
      ephemeral: true,
    });
  } catch (error) {
    interaction.reply({
      content: "There was a problem logging your kill",
      ephemeral: true,
    });
  }
};

export const log = new Command("log", command, commandHandler);
