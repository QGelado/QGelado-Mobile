const data = [
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
  {
    _id: '65f7403d997d32b0fabfd334',
    codigo: 9867395,
    status: 'A confirmar',
    data: '2024-03-17T19:10:53.825Z',
    preco: { $numberDecimal: '8.00' },
    usuario: {
      nome: 'Giovanna Matins Auberta Silva',
      email: 'gih4500@gmail.com',
      endereco: 'Rua Treze de Setembro, 137',
      telefone: 11971352140,
      _id: '65ee264b27464697a94a8935',
    },
    sorvetes: [
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
      {
        _id: '65f359d2d846d0173a43fdb0',
        nome: 'Sorvete de Morango e Abacaxi',
        preco: 6,
        sabores: [
          { sabor: 'Morango', preco: '2', quantidade: '105ml', id: '3' },
          { sabor: 'Abacaxi', preco: '2', quantidade: '100ml', id: '4' },
        ],
        recipiente: {
          nome: 'Casquinha',
          preco: '1.5',
          quantidade: '200ml',
          id: '3',
        },
        acompanhamentos: [{ sabor: 'Calda de morango', preco: '0.5', id: '2' }],
        imagem: '1710447058793.png',
        descricao:
          'Sorvete de Morango e Abacaxi na Casquinha de 200ml, com calda de morango',
        __v: 0,
      },
    ],
  },
];

export default data;