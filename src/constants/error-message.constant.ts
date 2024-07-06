const errorMessages: Record<string, string> = {
  reject: "User rejected the request",
  "invalid parameters": "Missing or invalid parameters."
} as const;

export default errorMessages;
