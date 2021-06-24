import removeFiles from "@noshot/utils/removeFiles";

(async (): Promise<void> => {
  try {
    const dirs = [
      "decrypt",
      "encrypt",
      ""
    ].map(file => `${file ? `${file}/` : ""}/index.js`);

    await removeFiles(dirs);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();