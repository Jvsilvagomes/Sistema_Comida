import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.comida.createMany({
        data: [
            { nome: 'Arroz', tipo: 'Cereais', preco: 5.5, descricao: 'Arroz branco cozido' },
            { nome: 'Feijão', tipo: 'Leguminosas', preco: 7.0, descricao: 'Feijão preto temperado' },
            { nome: 'Maçã', tipo: 'Frutas', preco: 3.25, descricao: 'Maçã vermelha' },

            { nome: 'Bife a Cavalo', tipo: 'Prato Principal', preco: 35.00, descricao: 'Bife frito com ovo em cima e batata frita' },
            { nome: 'Strogonoff de Frango', tipo: 'Prato Principal', preco: 42.50, descricao: 'Frango com molho cremoso de mostarda e cogumelos' },
            { nome: 'Lasanha Quatro Queijos', tipo: 'Prato Principal', preco: 48.90, descricao: 'Massa em camadas com molho bechamel e queijos' },
            { nome: 'Hambúrguer Gourmet', tipo: 'Lanche', preco: 28.99, descricao: 'Pão brioche, carne artesanal, bacon e queijo cheddar' },
            { nome: 'Coxinha de Camarão', tipo: 'Salgado', preco: 9.50, descricao: 'Massa de batata recheada com camarão e requeijão' },
            { nome: 'Pizza Calabresa', tipo: 'Prato Principal', preco: 55.00, descricao: 'Pizza com molho de tomate, queijo e calabresa fatiada' },
            { nome: 'Macarrão Carbonara', tipo: 'Prato Principal', preco: 40.00, descricao: 'Massa com ovo, queijo pecorino e pancetta' },
            { nome: 'Pão de Queijo', tipo: 'Salgado', preco: 4.50, descricao: 'Pão assado de polvilho e queijo, crocante e macio' },
            { nome: 'Kibe Frito', tipo: 'Petisco', preco: 6.00, descricao: 'Massa de trigo e carne, recheado com carne moída' },
            { nome: 'Salada de Frango', tipo: 'Prato Principal', preco: 32.75, descricao: 'Mix de folhas verdes com cubos de frango grelhado' },
            { nome: 'Batata Frita', tipo: 'Acompanhamento', preco: 18.00, descricao: 'Batatas fritas temperadas com sal e páprica' },
            { nome: 'Taco de Carne', tipo: 'Prato Principal', preco: 25.90, descricao: 'Tortilha de milho com recheio de carne temperada e guacamole' },
            { nome: 'Sopa de Legumes', tipo: 'Sopa', preco: 22.00, descricao: 'Sopa cremosa e nutritiva com legumes da estação' },
            { nome: 'Omelete com Queijo', tipo: 'Café da Manhã', preco: 15.50, descricao: 'Omelete de 3 ovos com queijo mussarela e orégano' },
            { nome: 'Hot Dog Simples', tipo: 'Lanche', preco: 16.50, descricao: 'Pão, salsicha, purê de batata e batata palha' },
            { nome: 'Quibe Assado', tipo: 'Prato Principal', preco: 45.00, descricao: 'Carne e trigo assados com recheio de queijo' },
            { nome: 'Crepe de Presunto e Queijo', tipo: 'Lanche', preco: 19.90, descricao: 'Massa fina recheada com presunto e queijo derretido' },
            
            { nome: 'Brigadeiro Tradicional', tipo: 'Doce', preco: 4.00, descricao: 'Doce de chocolate feito com leite condensado e granulado' },
            { nome: 'Pudim de Leite Condensado', tipo: 'Sobremesa', preco: 12.00, descricao: 'Doce cremoso de leite condensado com calda de caramelo' },
            { nome: 'Bolo de Cenoura', tipo: 'Sobremesa', preco: 9.00, descricao: 'Fatia de bolo de cenoura com cobertura de chocolate' },
            { nome: 'Açaí na Tigela', tipo: 'Doce', preco: 22.50, descricao: 'Polpa de açaí com banana e granola' },
            { nome: 'Churros com Doce de Leite', tipo: 'Doce', preco: 15.00, descricao: 'Palitos de massa frita com açúcar e canela, recheados' },
            { nome: 'Mousse de Chocolate', tipo: 'Sobremesa', preco: 11.50, descricao: 'Mousse leve e aerado de chocolate meio amargo' },
            { nome: 'Torta de Morango', tipo: 'Sobremesa', preco: 14.00, descricao: 'Massa crocante com creme de baunilha e morangos frescos' },
            { nome: 'Gelatina Colorida', tipo: 'Sobremesa', preco: 7.00, descricao: 'Gelatinas de diversos sabores e cores' },
            { nome: 'Panqueca Americana', tipo: 'Café da Manhã', preco: 17.50, descricao: 'Panquecas fofas com calda de maple e manteiga' },
            { nome: 'Cural de Milho', tipo: 'Doce', preco: 8.00, descricao: 'Doce cremoso feito com milho verde' },
            { nome: 'Cupcake de Baunilha', tipo: 'Sobremesa', preco: 9.90, descricao: 'Bolo individual com cobertura de creme de manteiga' },
            { nome: 'Waffle com Sorvete', tipo: 'Sobremesa', preco: 24.00, descricao: 'Waffle quentinho com uma bola de sorvete de creme' },
            
            { nome: 'Café Expresso', tipo: 'Bebida', preco: 6.00, descricao: 'Dose concentrada de café puro' },
            { nome: 'Suco de Laranja Natural', tipo: 'Bebida', preco: 10.00, descricao: 'Suco feito na hora com laranjas frescas' },
            { nome: 'Refrigerante Cola', tipo: 'Bebida', preco: 7.50, descricao: 'Lata de refrigerante sabor cola' },
            { nome: 'Água com Gás', tipo: 'Bebida', preco: 5.00, descricao: 'Água mineral com adição de gás' },
            { nome: 'Chá Gelado de Limão', tipo: 'Bebida', preco: 8.50, descricao: 'Chá preto gelado com sabor limão' },
            { nome: 'Smoothie de Morango', tipo: 'Bebida', preco: 15.00, descricao: 'Bebida cremosa de morango, iogurte e gelo' },
            { nome: 'Cerveja Lager', tipo: 'Bebida', preco: 16.00, descricao: 'Cerveja clara e leve, tipo Pilsen' },
            { nome: 'Capuccino', tipo: 'Bebida', preco: 11.00, descricao: 'Café com leite vaporizado e espuma de leite, polvilhado com canela' },
            
            { nome: 'Empada de Frango', tipo: 'Salgado', preco: 7.00, descricao: 'Massa podre recheada com frango desfiado' },
            { nome: 'Bolo de Carne', tipo: 'Prato Principal', preco: 38.00, descricao: 'Carne moída compactada, assada e fatiada' },
            { nome: 'Tabule', tipo: 'Acompanhamento', preco: 21.00, descricao: 'Salada árabe de trigo para quibe, tomate e hortelã' },
            { nome: 'Ceviche Clássico', tipo: 'Petisco', preco: 29.90, descricao: 'Peixe branco marinado em limão, cebola roxa e coentro' },
            { nome: 'Frango Grelhado', tipo: 'Prato Principal', preco: 34.00, descricao: 'Filé de frango grelhado e temperado' },
            { nome: 'Misto Quente', tipo: 'Lanche', preco: 12.00, descricao: 'Pão de forma tostado com queijo e presunto' },
            { nome: 'Taco de Frango', tipo: 'Prato Principal', preco: 26.90, descricao: 'Tortilha de milho com recheio de frango desfiado' },
            { nome: 'Bolinho de Bacalhau', tipo: 'Petisco', preco: 8.50, descricao: 'Bolinho frito de batata e bacalhau desfiado' },
            { nome: 'Filé Mignon', tipo: 'Prato Principal', preco: 70.00, descricao: 'Corte nobre de carne bovina grelhada' }
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });