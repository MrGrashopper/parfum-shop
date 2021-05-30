import { FilterBrandType } from "../../helpers/Functions";

const Parfums1 = [
    {
        "id": "30150001",
        "name": "Lancôme La vie est belle Eau de Parfum",
        "slug": "parfum/lancome/la-vie-est-belle/lancome-la-vie-est-belle-eau-de-parfum.html",
        "brand": "Lancôme",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-la-vie-est-belle-eau-de-parfum-30-ml.jpg",
        "price": 3895,
        "size": "30ML",
        "rating": 99
    }
];

const Parfums2 = [
    {
        "id": "30103318",
        "name": "Jean Paul Gaultier Le Male Eau de Toilette",
        "slug": "parfum/jean-paul-gaultier/le-male/jean-paul-gaultier-le-male-eau-de-toilette.html",
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-le-male-eau-de-toilette-125-ml-3423470317534.jpg",
        "price": 3395,
        "size": "40ML",
        "rating": 99
    }    
]

it('test function with null states', () => {
    const brandState = null;
    const typeState = null;
    const filter = FilterBrandType(brandState, typeState, Parfums1);
    expect(filter).toEqual(Parfums1);
});

it('test function with typeState not match', () => {
    const brandState = null;
    const typeState = ["Eau de Toilette"];
    const filter = FilterBrandType(brandState, typeState, Parfums1);
    expect(filter).not.toEqual(Parfums1);
});

it('test function with typeState matches', () => {
    const brandState = null;
    const typeState = ["Eau de Toilette"];
    const filter = FilterBrandType(brandState, typeState, Parfums2);
    expect(filter[0].type).toEqual(Parfums2[0].type);
});