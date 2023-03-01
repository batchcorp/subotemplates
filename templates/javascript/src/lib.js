import { log } from "@suborbital/runnable";

export const run = (input) => {
  try {
    // Input will be a string of JSON representing your payload
    // Convert into an object so that we can manipulate the data
    const msg = JSON.parse(input)

    // Example: A field in your collection was of type integer,
    // but is now a type of string. Let's convert it back to an
    // integer so that it matches your collections schema
    //
    // msg.my_field = parseInt(msg.my_field)

    // Turn your modified payload back into a string and return
    return JSON.stringify(msg);
  } catch (error) {
    log.error(error);

    // Return unmodified input on failure
    return input
  }
};
