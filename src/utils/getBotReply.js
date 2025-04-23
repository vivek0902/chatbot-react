import botReplies from "../data/data";

const getBotReply = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cleanedInput = input.toLowerCase().trim();
      for (const key of Object.keys(botReplies)) {
        if (cleanedInput.includes(key)) {
          return resolve(botReplies[key]);
        }
      }
      resolve("_Sorry, I don't understand that command._");
    }, 1500);
  });
};

export default getBotReply;
