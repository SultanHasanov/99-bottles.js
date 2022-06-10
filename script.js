function generateSongText(num) {
if(num >= 11 && num <= 19){
   return `${num} бутылок пива на стене, ${num} бутылок пива! \n Возьми одну, пусти по кругу, ${num -1} бутылок пива на стене!` 
} else if (num % 10 === 1){
    return `${num} бутылка пива на стене, ${num} бутылка пива! \n Возьми одну, пусти по кругу, ${num -1} бутылка пива на стене!`
} else if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4){
    return `${num} бутылки пива на стене, ${num} бутылки пива! \n Возьми одну, пусти по кругу, ${num -1} бутылки пива на стене!`
} else {
    return `${num} бутылок пива на стене, ${num} бутылок пива! \n Возьми одну, пусти по кругу, ${num -1} бутылок пива на стене!`
}
}


generateSingleStanza()

function generateSingleStanza(num) {
for (let i = 99; i >= 1; i--){
   console.log(generateSongText(i))
}
}