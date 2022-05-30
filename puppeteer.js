const puppeteer = require("puppeteer");
const extensionPath = "extension";

let browser;
let page;
let backgroundPage;

function run()
{
  browser = await puppeteer.launch({headless: false, args: [
    `--disable-extensions-except=${extensionPath}`,
    `--load-extension=${extensionPath}`,
    "--no-sandbox"
  ]});
  page = await browser.newPage();
  const extensionName = "Chromium browser automation";
  const targets = await browser.targets();
  const backgroundPageTarget = targets.find(({ _targetInfo }) => _targetInfo.title.startsWith(extensionName) && _targetInfo.type === "background_page");
  backgroundPage = await backgroundPageTarget.page();
}

run();