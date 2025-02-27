import puppeteer from "puppeteer";

const url = 'https://app.demiplane.com/nexus/pathfinder2e/character-sheet/fe6edc03-ba99-4cfd-8d0b-4caff39c696a';

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await delay(30000);

    const elements = await page.$$('.attribute-row-modifier');
    const texts = await Promise.all(elements.map(async element => {
        return await page.evaluate(el => el.textContent, element);
    }))

    console.log(texts);

    const elements2 = await page.$$('.attribute-row-title');
    const texts2 = await Promise.all(elements2.map(async element => {
        return await page.evaluate(el => el.textContent, element);
    }))

    console.log(texts2);

    // await page.screenshot({ path: "screenshot.png" });
    await browser.close();
}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

main();
