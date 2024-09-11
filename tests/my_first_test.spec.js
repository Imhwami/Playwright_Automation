const {test, expect} = require('@playwright/test')

test('NRI', async({page})=>{
    await page.goto('https://www.nri.co.id/')
    await expect(page).toHaveTitle('Nomura Research Institute Indonesia')
})

test('Kinobi', async({page})=>{
    await page.goto('https://kinobi.tech/id')
    await expect(page).toHaveTitle('Kinobi — Portal Karier Digital #1 untuk Raih Sukses IKU & Akreditasi')
})