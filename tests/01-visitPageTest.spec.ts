import { test } from '@playwright/test';

// Tutorial: Understanding async and await

// The 'async' keyword is used to declare an asynchronous function.
// This allows the function to perform asynchronous operations, such as network requests or file I/O.
test('first test', async ({ page }) => {
    // The 'await' keyword is used to wait for a promise to resolve.
    // It can only be used inside an async function.
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

// In this example, 'async' allows the test function to use 'await'.
// 'await' pauses the execution of the function until the promise returned by 'page.goto' and other methods is resolved.
// This ensures that each step completes before moving on to the next one, making the code easier to read and write.