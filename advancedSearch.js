const { remote } = require('webdriverio');

async function advancedSearch() {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                // Your capabilities goes here!
                browserName: 'chrome',
                deviceName: 'emulator-5556',
                platformName: "android",
                platformVersion: "10",
                chromedriverExecutable: 'C:\\Users\\idana\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.exe'
            }
        })

        //advanced search
        await browser.navigateTo("https://cakes-automation-course-mobile.herokuapp.com/index.html")
        await browser.pause(1000)
        let advanced = await browser.$("#advancedSearchIcon")
        await browser.pause(1000)
        await advanced.click()


        let arrCakeType = await browser.$$(".cakeTypes")
        // let cakesText = await browser.$$('.formLabelNoBlock')
        // console.log(cakesText.getText())
        for (let i of arrCakeType) {
            // for (let t of cakesText) {
                // if(typeCheckbox == 'Cheese'){
                await browser.pause(1000)
                await i.click() 
        }
       
        let cakeRate = await browser.$$(".cakeRates")
        for (let x of cakeRate) {
            let element = await browser.getElementText(".cakeRates");
            await element.text();
            console.log(element)
            await browser.pause(1000)
            await x.click()
        }
                // }
                // if (typeCheckbox == 'Chocolate') {
                //     await browser.pause(1000)
                //     await i.click() 
                // }
                // if (typeCheckbox == 'Mousse') {
                //     await browser.pause(1000)
                //     await i.click()   
                // }
                // else {
                //     console.log(`Couldn't click chechbox`)
                // }        
            // }
        
        
        // const text = browser.$('#advancedForm');
        // let t = text.$$('input')[2].$('value')
        // await browser.pause(1000)
        // await t.click()



        // let clickCakes = await browser.$$(`#advancedForm .cakeTypes[value='${arrCakeType}']`)
        // for (let i of clickCakes) {
        //     for (let a of arrCakeType) {
        //         if(a == cakeType) {
        //             let clickCake = await browser.$(`#advancedForm .cakeTypes[value='${cakeType}']`)
        //             await browser.pause(1000)
        //             await clickCake.click()
        //         }
        //     }
        // }


        // await browser.deleteSession()
    } catch (error) {
        console.error(error)
    }
}

advancedSearch()