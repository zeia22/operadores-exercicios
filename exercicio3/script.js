const salarioFixo = 2000;
const auxilioCreche = 45.50 * 2;
const salarioBenificio = salarioFixo + auxilioCreche;

console.log(`O sálario Benificio é de :  ${salarioBenificio}`);

const comissaoJan = 5784.50 * 0.1;
console.log(comissaoJan);

const descontoInssJan = (salarioFixo + comissaoJan) * 0.05;
console.log(`O desconto será de : ${descontoInssJan}`);

const comissaoPagJan = ((salarioFixo + comissaoJan + auxilioCreche) * 0.05);
const total =  (salarioFixo + comissaoJan) - comissaoPagJan ;
console.log(`O salário de janeiro com desconto e acrécimos é ${total}`);

const comissaoFev =3418.41 * 0.1;
const comissaoPagFev = ((salarioFixo + comissaoFev + auxilioCreche) * 0.05);
const totalFev =  (salarioFixo + comissaoFev ) - comissaoPagFev ;
console.log(`O salário de fevereiro com desconto e acrécimos é ${totalFev}`);

const comissaoMarc = 4124.10 * 0.1;
const  comissaoPagMarc = ((salarioFixo + comissaoMarc + auxilioCreche) * 0.05);
const totalMarc = (salarioFixo + comissaoMarc ) - comissaoPagMarc ;
console.log(`O salário de Março com desconto e acrécimos é ${totalMarc}`);

const comissaoAbril = 1874 * 0.1;
const  comissaoPagAbril = ((salarioFixo + comissaoAbril + auxilioCreche) * 0.05);
const totalAbril = (salarioFixo + comissaoAbril ) - comissaoPagAbril ;
console.log(`O salário de Abril com desconto e acrécimos é ${totalAbril}`);

const comissaoMaio = 7000 * 0.1;
const  comissaoPagMaio = ((salarioFixo + comissaoMaio + auxilioCreche) * 0.05);
const totalMaio = (salarioFixo + comissaoMaio ) - comissaoPagMaio ;
console.log(`O salário de Maio com desconto e acrécimos é ${totalMaio}`);

const comissaoJunho = 9450 * 0.1;
const  comissaoPagJun = ((salarioFixo + comissaoJunho + auxilioCreche) * 0.05);
const totalJunh = (salarioFixo + comissaoJunho ) - comissaoPagJun ;
console.log(`O salário de Junho com desconto e acrécimos é ${totalJunh}`);

const mediaSalarial = (total + totalFev + totalMarc + totalAbril + totalMaio + totalJunh) / 6;
console.log (`A média salárial de 6 meses é de ${mediaSalarial}`)
