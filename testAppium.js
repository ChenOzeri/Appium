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
      //project 1
      //go to the home page and enter input to the search
      await browser.navigateTo("https://duckduckgo.com/html/")      
      let searchInput = await browser.$('#search_form_input_homepage')
      await searchInput.addValue('webrowserio')
      await browser.pause(1000)
      //click on search
      let search = await browser.$('#search_button_homepage')
      await search.click()
      await browser.pause(1000)
      //get title
      let getTitle = browser.getTitle()
      console.log(getTitle)

      // await browser.deleteSession()
   } catch (error) {
      console.error(error)
   }
}
//calling the functions above
functionName()
