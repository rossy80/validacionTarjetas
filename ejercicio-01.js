function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
var numeroDigitos = creditCardNumber;
if (numeroDigitos != 16) {return false}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
