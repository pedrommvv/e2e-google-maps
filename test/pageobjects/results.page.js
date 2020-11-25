import Page from './page'

export class ResultsPage extends Page {
  get panelTitle() {
    return $('#pane h1 span').getText()
  }

  get panelSubTitle() {
    return $('#pane h2 span').getText()
  }

  returnTitle() {
    return this.panelTitle
  }

  returnSubTitle() {
    return this.panelSubTitle
  }
}

export const resultsPage = new ResultsPage()
