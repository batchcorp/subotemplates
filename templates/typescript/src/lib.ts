import { log } from "@suborbital/runnable";

export const run = (input: string): string => {
  try {
    // Input will be a string of JSON representing your payload
    // Convert into an object so that we can manipulate the data
    const msg: { my_field: string | number } = JSON.parse(input);

    // Example: A field in your collection was of type integer,
    // but it might now be of type of string. Let's check and convert
    // it back to an integer so that it matches your collections schema
    msg.my_field =
        typeof msg.my_field === "string" ? parseInt(msg.my_field) : msg.my_field;

    // Turn your modified payload back into a string and return
    return JSON.stringify(msg);
  } catch (error: any) {
    log.error(error);
    return input;
  }
};