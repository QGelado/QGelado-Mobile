const data2 = [
  {
    _id: '65f750dfb2de3abb4aaf715e',
    codigo: 9867375,
    status: 'Finalizado',
    data: '2024-03-17T20:21:51.011Z',
    preco: { $numberDecimal: '10.00' },
    usuario: {
      nome: 'Fernanda Souza',
      email: 'fernanda561@gmail.com',
      endereco: 'Av nordestina, 1437',
      telefone: 11971114321,
      _id: '65ee271a7d1e9887f40df1ff',
    },
    sorvetes: [
      {
        _id: '65dd11392aacadacb8c01525',
        nome: 'Eskibon Clássico',
        marca: 'Kibon',
        preco: 6,
        sabor:
          'Sorvete de baunilha coberto com casquinha de chocolate ao leite',
        quantidade: 200,
        status: 'Em estoque',
        imagem: '1709940179291.png',
        descricao:
          'Um delicioso e geladinho sorvete de baunilha coberto com uma casquinha de chocolate 79ml',
      },
      {
        _id: '65dd15822aacadacb8c01529',
        nome: 'Sorvete de Morango e Uva',
        preco: 2,
        sabores: [
          { sabor: 'Morango', preco: '2', quantidade: '100ml', id: '1' },
          { sabor: 'Uva', preco: '2', quantidade: '200ml', id: '1' },
        ],
        recipiente: {
          nome: 'Casquinha',
          preco: '1.5',
          quantidade: '100ml',
          id: '1',
        },
        imagem: '1710011284052.png',
        descricao:
          'Sorvete de Morango e Uva na Casquinha de 200ml, com calda de morango e confete',
        acompanhamentos: [{ sabor: 'Confete', preco: '0.5', id: '1' }],
      },
    ],
  },
];


export default data2;