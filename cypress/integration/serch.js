

describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');

    })
    it('search for elements for multiple results', () => {
        /*cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })*/
        cy.search('dress');
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.titule).should('contain', 'dress');

        })
    });
    it('search for elements with no results', ()=>{
        
        cy.search('qwerty');
        /*cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        });*/
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
    
        })
    });
  
});