const core = require("@actions/core");
const toolCache = require("@actions/tool-cache");
const path = require("path");

const { getDownloadObject } = require("./utils");

async function main() {
  try {
    // Get version input
    const version = core.getInput("version");

    // Download the archive containing the binaries
    const download = getDownloadObject(version);
    console.log(`Downloading Dojo '${version}' from: ${download.url}`);
    const pathToArchive = await toolCache.downloadTool(download.url);

    // Extract the archive onto host runner
    console.log(`Extracting ${pathToArchive}`);
    const extract = download.url.endsWith(".zip") ? toolCache.extractZip : toolCache.extractTar;
    const pathToCLI = await extract(pathToArchive);

    // Expose the tool
    core.addPath(path.join(pathToCLI, download.binPath));
  } catch (err) {
    core.setFailed(err);
  }
}

module.exports = main;

if (require.main === module) {
  main();
}
