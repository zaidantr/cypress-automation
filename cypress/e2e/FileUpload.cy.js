import 'cypress-file-upload';

describe('File Uploads', (() => {
    it('Single File Upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('-main.jpg');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })
    it('File Upload - Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath: '-main.jpg', fileName: 'myfile.jpg'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')    })
    it('File Upload - Drap & Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('-main.jpg', {subjectType: 'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('-main.jpg')
    })
    it('Multiple File Upload', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["-main.jpg", "-main2.jpg"])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
    })
    it.only('File Upload - Shadow DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("-main.jpg")
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('-main.jpg')
    })
}))