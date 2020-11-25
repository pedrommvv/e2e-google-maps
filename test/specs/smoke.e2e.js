import { homePage } from '../pageobjects/home.page'
import { resultsPage } from '../pageobjects/results.page'
import { directionsPage } from '../pageobjects/directions.page'
import assert from 'assert'

describe('Smoke Suite', function () {
  it('Search for a location returns the correct result', () => {
    browser.maximizeWindow()
    homePage.open()
    homePage.acceptCookies()
    homePage.search('Dublin')
    const city = resultsPage.returnTitle()
    const country = resultsPage.returnSubTitle()

    assert.strictEqual(
      process.env['ACCEPTANCE_CITY'],
      city,
      'City does not match'
    )
    assert.strictEqual(
      process.env['ACCEPTANCE_COUNTRY'],
      country,
      'Country does not match'
    )
  })

  it('Guarantee that the Destination is Saved', () => {
    const destiny = directionsPage.getDirectionsDestination()
    assert.strictEqual(
      process.env['ACCEPTANCE_DESTINY'],
      destiny,
      'City does not match'
    )
  })
})
