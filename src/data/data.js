const botReplies = {
  hello: [
    "**Hi there!** 👋",
    "I'm your _friendly_ chatbot!",
    "`How can I help you today?`",
  ],
  "how are you": [
    "**I'm doing great!**",
    "Just some JS running in the background ⚙️",
    "`Let me know if you need help.`",
  ],
  "what's your name": [
    "**I’m called CodeBot.**",
    "_A chatbot powered by React and Markdown!_",
    "`Nice to meet you!`",
  ],
  bye: ["**Goodbye!** 👋", "_See you next time._", "`Stay curious!`"],
  "code example": [
    "**Here’s a quick JS snippet:**",
    "```js\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3));\n```",
  ],
  "styled text": [
    "**Bold text**",
    "_Italic text_",
    "`Inline code`",
    "<span style='color: red'>Red text using inline HTML</span>",
  ],
};

export default botReplies;
