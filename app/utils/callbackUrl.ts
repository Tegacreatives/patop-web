export function getCallbackUrl() {
  if (process.env.NODE_ENV === "production") {
    // Use the production callback URL
    return process.env.PRODUCTION_CALLBACK_URL;
  } else {
    // Use the development callback URL
    return process.env.DEVELOPMENT_CALLBACK_URL;
  }
}
