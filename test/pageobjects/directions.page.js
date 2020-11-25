import Page from './page'

export class DirectionsPage extends Page {
  get directionsButton() {
    return $('button[data-value="Direções"]')
  }

  get destinyInput() {
    return $('#directions-searchbox-1 input')
  }

  getDirectionsDestination() {
    this.directionsButton.waitForDisplayed()
    this.directionsButton.click()
    this.destinyInput.waitForDisplayed()
    const destiny = this.destinyInput.getAttribute('aria-label')

    return destiny
  }
}

export const directionsPage = new DirectionsPage()
