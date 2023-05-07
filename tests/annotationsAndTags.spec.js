import {test} from '@playwright/test';


test.skip("Test 1", async ({page}) =>{

})

test("not yet ready", async ({page}) => {
    // page.goto('https://google.com')
    test.fail();
})

test.fixme("test to be fixed", async ({page})=>{
    //...

})

test('slow test', async ({page}) =>{
    test.slow();
    //...
    
})



