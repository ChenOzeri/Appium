const { remote } = require('webdriverio');
async function functionName() {
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

      //project2
      //go to this web page and insert input to the search option
      await browser.navigateTo("https://cakes-automation-course-mobile.herokuapp.com/index.html")
      await browser.pause(1000)
      let findSearch = await browser.$('#searchIcon')
      await browser.pause(1000)
      await findSearch.click()
      await browser.pause(1000)
      let writeInput = await browser.$("#searchInput")
      await browser.pause(1000)
      await writeInput.addValue('store')
      await browser.pause(1000)
      let button = await browser.$('#searchIconButton')
      await browser.pause(1000)
      await button.click()

   
      // await browser.deleteSession()
   } catch (error) {
      console.error(error)
   }
}
//calling the functions above
functionName()
