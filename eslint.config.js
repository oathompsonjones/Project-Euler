import createConfig from "@oathompsonjones/eslint-config";

export default [...createConfig("./tsconfig.json"), { rules: { "no-console": "off" } }];
