/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background:
          "url('https://images4.alphacoders.com/676/thumb-1920-676369.jpg')",
        attackerButton:
          "url('https://media.discordapp.net/attachments/692891121185062944/1021876150961721395/bootlegattack.png')",
        defenderButton:
          "url('https://media.discordapp.net/attachments/692891121185062944/1021876150596808865/bootlegdefender.png')",
        cardBG:
          "url('https://media.discordapp.net/attachments/867384020672184323/1067109041941250108/CardBG.jpg')",
      },
    },
  },
  plugins: [],
};
