import zod from "zod";

const envSchema = zod.object({
  UNSPLASH_ACCESS_KEY: zod.string().min(1),
  FOURSQUARE_API: zod.string().min(1),
});

export const env = envSchema.parse(process.env);
