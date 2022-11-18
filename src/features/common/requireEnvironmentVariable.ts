export default function requireEnvironmentVariable(environmentVariableKey: string) {
  const value = process.env[environmentVariableKey];

  if (!value) throw new Error(`Environment variable ${environmentVariableKey} was not defined!`);

  return value;
}
