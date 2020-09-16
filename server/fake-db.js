const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [
            {
                id: '1',
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sampleText1',
                heading2: 'sampleText2',
                heading3: 'sampleText3',
                headingText1: 'sample sample sample sample sample',
                headingText2: 'Text Text Text Text Text',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
              },
              {
                id: '2',
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sampleText1',
                heading2: 'sampleText2',
                heading3: 'sampleText3',
                headingText1: 'sample sample sample sample sample',
                headingText2: 'Text Text Text Text Text',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
              },
              {
                id: '3',
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'sampleText1',
                heading2: 'sampleText2',
                heading3: 'sampleText3',
                headingText1: 'sample sample sample sample sample',
                headingText2: 'Text Text Text Text Text',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
              },
              {
                id: '4',
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'sampleText1',
                heading2: 'sampleText2',
                heading3: 'sampleText3',
                headingText1: 'sample sample sample sample sample',
                headingText2: 'Text Text Text Text Text',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
              }
        ]
    }

    async initDb() {
        await this.clearDb()
        this.pushProductsToDB()
    }

    async clearDb() {
        await product.deleteMany({})
    }

    pushProductsToDB() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
}

module.exports = FakeDb