import botResponseData from "./responseData";

const getBotReply = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cleanedInput = input.toLowerCase().trim();
      for (const key of Object.keys(botResponseData)) {
        if (cleanedInput.includes(key)) {
          return resolve(botResponseData[key]);
        }
      }
      resolve(["_Sorry", "I don't understand that command._"]);
    }, 1500);
  });
};

export default getBotReply;
