const path = require("path");
const {
  promises: { readdir, readFile, mkdir, writeFile },
} = require("fs");

const solc = require("solc");

const resolvePath = (...aPath) => path.resolve(process.cwd(), ...aPath);

const createDir = async (...aPath) => {
  try {
    const pathToCreate = resolvePath(...aPath);
    await mkdir(pathToCreate, { recursive: true });
    console.log(`📁 Directory created at: ${pathToCreate}`);
  } catch (error) {
    console.log(`📁💥 Failed to create directory at: ${pathToCreate}`);
  }
};

const createFile = async (content, ...aPath) => {
  try {
    const pathToCreate = resolvePath(...aPath);
    await writeFile(pathToCreate, content);
    console.log(`🗄 File created at: ${aPath.join("/")}`);
  } catch (error) {
    console.log(`🗄💥 Failed to create file at: ${aPath.join("/")}`);
  }
};

const compileInput = {
  language: "Solidity",
  sources: {},
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

(async () => {
  const contractsName = await readdir(resolvePath("contracts"));

  for (const contractName of contractsName) {
    const contractSource = await readFile(
      resolvePath("contracts", contractName),
      "utf-8"
    );

    compileInput.sources[contractName] = { content: contractSource };
  }

  const compiledOutput = JSON.parse(solc.compile(JSON.stringify(compileInput)));

  if (!compiledOutput.contracts) {
    console.log("🏗 Compile error: ", compiledOutput);
    process.exit(1);
  }

  await createDir("artifacts");

  for (const contractName of contractsName) {
    createFile(
      `module.exports = ${JSON.stringify(
        compiledOutput.contracts[contractName],
        null,
        2
      )};`,
      "artifacts",
      contractName.replace(".sol", ".js")
    );
  }
})();
