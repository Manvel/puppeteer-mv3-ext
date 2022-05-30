const puppeteer = require("puppeteer");
const extensionPath = "mv3";

let browser;

async function run()
{
  browser = await puppeteer.launch({headless: false, args: [
    `--disable-extensions-except=${extensionPath}`,
    `--load-extension=${extensionPath}`,
    "--no-sandbox"
  ]});
  page = await browser.newPage();
  const extensionName = "Boilerplate";
  const targets = await browser.targets();
  setTimeout(() => {
    targets.forEach(({_targetInfo}) => {
      console.log(_targetInfo.type);
    })
  }, 10000);
}


run();