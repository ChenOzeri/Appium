const { remote } = require('webdriverio');

async function functionName() {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                // Your capabilities goes here!
                deviceName: 'emulator-5556',
                platformName: "android",
                platformVersion: "10",
                appPackage: 'com.google.android.calculator',
                appActivity: 'com.android.calculator2.Calculator'
            }
        })
        //project 3
        //Create a function that calculates this expression: 150/30 -> 150\3=50

        let one = await browser.findElement('id','com.google.android.calculator:id/digit_1')
        await browser.pause(1000)
        await browser.elementClick(one['ELEMENT'])
        await browser.pause(1000)
        let five = await browser.findElement('id', 'com.google.android.calculator:id/digit_5')
        await browser.pause(1000)
        await browser.elementClick(five['ELEMENT'])
        let zero = await browser.findElement('id', 'com.google.android.calculator:id/digit_0')
        await browser.elementClick(zero['ELEMENT'])
        await browser.pause(1000)
        let divided = await browser.findElement('id', 'com.google.android.calculator:id/op_div')
        await browser.elementClick(divided['ELEMENT'])
        await browser.pause(1000)
        let three = await browser.findElement('id', 'com.google.android.calculator:id/digit_3')
        await browser.pause(1000)
        await browser.elementClick(three['ELEMENT'])
        await browser.pause(1000)
        let zer = await browser.findElement('id', 'com.google.android.calculator:id/digit_0')
        await browser.elementClick(zer['ELEMENT'])
        await browser.pause(1000)
        let del = await browser.findElement('id', 'com.google.android.calculator:id/del')
        await browser.elementClick(del['ELEMENT'])
        await browser.pause(1000)
        let equals = await browser.findElement('id', 'com.google.android.calculator:id/eq')
        await browser.pause(1000)        
        await browser.elementClick(equals['ELEMENT'])
        await browser.pause(1000)  
        let result = await browser.findElement('id', 'com.google.android.calculator:id/result_final')
        await browser.pause(1000)  
        let findResult = await browser.getElementText(result['ELEMENT'])
  
        if (findResult == 50){
            console.log(`The number is ${findResult}`)
        }
       await browser.saveScreenshot('calc2.png')
       
    } catch (error) {
        console.error(error)
    }
}

functionName()