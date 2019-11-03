/// <reference types="Cypress" />

describe('Scenario Testing', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows empty design', () => {
    cy.get('.bp3-popover-target button').click()
    cy.get('.bp3-popover li').eq(1).click()
    cy.reload()

    cy.get('.empty-design').should('be.visible')
    cy.get('.empty-design').get('h1').should('contain', 'Nothing Found')
    cy.get('.empty-design').get('button').should('contain', 'Add a new user')
  })

  it('shows users UI but with no teams UI', () => {
    cy.get('.bp3-popover-target button').click()
    cy.get('.bp3-popover li').eq(2).click()
    cy.reload()

    cy.get('.body').should('be.visible')
    cy.get('.body > h1').should('contain', 'Users')
    cy.get('.body > .users').should('be.visible')
    cy.get('.body > .teams').should('not.be.visible')
  })

  it('shows teams UI but with no users UI', () => {
    cy.get('.bp3-popover-target button').click()
    cy.get('.bp3-popover li').eq(3).click()
    cy.reload()

    cy.get('.body').should('be.visible')
    cy.get('.body > h1').should('contain', 'Teams')
    cy.get('.body > .teams').should('be.visible')
    cy.get('.body > .users').should('not.be.visible')
  })

  it('shows teams UI and with users UI', () => {
    cy.get('.bp3-popover-target button').click()
    cy.get('.bp3-popover li').eq(4).click()
    cy.reload()

    cy.get('.body').should('be.visible')
    cy.get('.body > h1').should('contain', 'Teams')
    cy.get('.body > h1').should('contain', 'Users')
    cy.get('.body > .users').should('be.visible')
    cy.get('.body > .teams').should('be.visible')
  })
})