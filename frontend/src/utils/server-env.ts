import { SystemErrors } from "@app/types/error-types";

/**
 * Why use this file?
 * In a case where you forgot to add the environment variable API_KEY the application won't even build/compile,
 * and it will throw an error like this: Couldn't find environment variable: API_KEY.
 * @param environmentVariable name of variable to use
 * @returns object with all env variables
 */
const getEnvironmentVariable = (
  environmentVariable: string,
  initial?: string
): string => {
  const unvalidatedEnvironmentVariable =
    process.env[environmentVariable] || initial;
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`${SystemErrors.MISSING_ENV_VAR}: ${environmentVariable}`);
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const Envs = {};
