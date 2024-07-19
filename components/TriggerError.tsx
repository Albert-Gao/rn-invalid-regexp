import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { Text } from "react-native";

const mySchema = z
  .object({
    myString: z.string().min(5),
    myUnion: z.union([z.number(), z.boolean()]),
  })
  .describe("My neat object schema");

const jsonSchema = zodToJsonSchema(mySchema, "mySchema");

export function TriggerError() {
  return <Text>{JSON.stringify(jsonSchema.definitions)}</Text>;
}
