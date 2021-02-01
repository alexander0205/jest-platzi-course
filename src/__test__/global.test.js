
const text = "Hola Mundo"

// prueba
const fruits = ['manzana', 'melon', 'banana']


test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/)
});

test('tenemos una banana?', () => {
    expect(fruits).toContain('banana')
});

test('Mayor que ', () => {

    expect(10).toBeGreaterThan(8)
})

test('Verdadero', () => {
    expect(true).toBeTruthy()
})


// Prueba CallBack
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}



test('Probar un Callback ', () => {
    reverseString("hola", (str) => {
        expect(str).toBe("aloh")
    });
})


const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('Probar una promesa ', () => {
    return reverseString2("hola").then(string => {
        expect(string).toBe("aloh")
    })
})

test('Probar async/await', async () => {
    const string = await reverseString2("hola")
    expect(string).toBe("aloh")

})

// afterEach(() => console.info("Despues de cada prueba"))
// afterAll(()=>console.info("Despues de todas las pruebas"))

// beforeEach(()=>console.log("Antes de cada prueba"))
// beforeAll(()=>console.log("Antes de todas las pruebas"))