import Page from './page'

export class HomePage extends Page {
  get searchInput() {
    return $('#searchboxinput')
  }

  get searchBox() {
    return $('#searchbox-searchbutton')
  }

  get consentIframe() {
    return $('iframe[class="widget-consent-frame"]')
  }

  get agreeButton() {
    return $('#introAgreeButton span span')
  }

  search(inputText) {
    this.searchInput.waitForDisplayed()
    this.searchInput.setValue(inputText)
    this.searchBox.click()
  }

  acceptCookies() {
    this.consentIframe.waitForExist(10000)
    browser.switchToFrame(this.consentIframe)
    this.agreeButton.waitForDisplayed()
    this.agreeButton.click()
    browser.switchToParentFrame()
  }

  open() {
    return super.open('')
  }
}

export const homePage = new HomePage()
