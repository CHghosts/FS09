function sumTTCPrices(prixHT1, prixHT2, prixHT3, tva = 20) {
    return (prixHT1 + prixHT2 + prixHT3) * (1 + tva / 100);
}

const pricesHT = [100, 200, 55];

console.log(sumTTCPrices(pricesHT[0],pricesHT[1],pricesHT[2])); //calculer la somme avec une TVA par défaut de 20%, res 426
console.log(sumTTCPrices(pricesHT[0],pricesHT[1],pricesHT[2], 5.5)); // avec une TVA de 5.5%, res 374,525