import { TestBed } from "@angular/core/testing";
import {test} from "@playwright/test";

test.beforeAll(() => {}) //This will run before all the tests are run.



//What to do when we have reprtitive code in our tests?
//We can use hooks to avoid repetitive code in our tests.
//Hooks are functions that are executed
//before or after each test or suite.

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
});


test.describe.only('suite 1', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click();
    });

    test('first test', async ({page}) => {
        await page.getByText('Form Layouts').click();
    });

    test('second test navigate to date picker', async ({page}) => {
        await page.getByText('Datepicker').click();
    });  
});

test.describe.skip('suite 2', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Charts').click();
    });

    test('first test', async ({page}) => {
        await page.getByText('Form Layouts').click();
    });

    test('second test navigate to date picker', async ({page}) => {
        await page.getByText('Datepicker').click();
    });
});



test.afterEach(async ({page}) => {}) //This will run after each test is done.
test.afterAll(async () => {})   //This will run after all the tests are done.