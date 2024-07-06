import errorMessages from "@/constants/error-message.constant";

function getErrorMessage(message: string): string {
  const lowercaseMessage = message.toLowerCase();

  for (const key in errorMessages) {
    if (lowercaseMessage.includes(key)) {
      return errorMessages[key];
    }
  }

  return message;
}

export { getErrorMessage };
