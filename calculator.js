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
        // Create a function that calculates this expression: 3+4*5=23

        let three = await browser.findElement('id', 'com.google.android.calculator:id/digit_3')
        await browser.pause(1000)
        await browser.elementClick(three['ELEMENT'])
        await browser.pause(1000)
        let plus = await browser.findElement('id', 'com.google.android.calculator:id/op_add')
        await browser.pause(1000)
        await browser.elementClick(plus['ELEMENT'])
        await browser.pause(1000)
        let four = await browser.findElement('id','com.google.android.calculator:id/digit_4')
        await browser.pause(1000)
        await browser.elementClick(four['ELEMENT'])
        await browser.pause(1000)
        let multiply = await browser.findElement('id', 'com.google.android.calculator:id/op_mul')
        await browser.pause(1000)
        await browser.elementClick(multiply['ELEMENT'])
        await browser.pause(1000)
        let five = await browser.findElement('id', 'com.google.android.calculator:id/digit_5')
        await browser.pause(1000)
        await browser.elementClick(five['ELEMENT'])
        await browser.pause(1000)
        let equals = await browser.findElement('id', 'com.google.android.calculator:id/eq')
        await browser.pause(1000)        
        await browser.elementClick(equals['ELEMENT'])
        await browser.pause(2000)  
        let result = await browser.findElement('id', 'com.google.android.calculator:id/result_final')
        await browser.pause(2000)  
        let findResult = await browser.getElementText(result['ELEMENT'])
        
        if (findResult == 23){
            console.log(`The number is ${findResult}`)
        }
    } catch (error) {
        console.error(error)
    }
}

functionName()