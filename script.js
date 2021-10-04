const states = [
  {
    name: 'Acre',
    capital: 'Rio Branco',
    region: 'Norte',
    routeTo: ['Macapá', 'Belém', 'Palmas']
  },
  {
    name: 'Alagoas',
    capital: 'Maceió',
    region: 'Nordeste',
    routeTo: ['Fortaleza']
  },
  {
    name: 'Amapá',
    capital: 'Macapá',
    region: 'Norte',
    routeTo: ['Rio Branco', 'Manaus']
  },
  {
    name: 'Amazonas',
    capital: 'Manaus',
    region: 'Norte',
    routeTo: ['Macapá']
  },
  {
    name: 'Bahia',
    capital: 'Salvador',
    region: 'Nordeste',
    routeTo: ['Boa Vista', 'São Luís', 'Aracaju']
  },
  {
    name: 'Ceará',
    capital: 'Fortaleza',
    region: 'Nordeste',
    routeTo: ['Maceió']
  },
  {
    name: 'Distrito Federal',
    capital: 'Brasília',
    region: 'Centro Oeste',
    routeTo:  ['Campo Grande']
  },
  {
    name: 'Espiríto Santo',
    capital: 'Vitória',
    region: 'Sudeste',
    routeTo: ['Cuiabá', 'Belo Horizonte']
  },
  {
    name: 'Goiás',
    capital: 'Goiânia',
    region: 'Centro Oeste',
    routeTo: ['Cuiabá']
  },
  {
    name: 'Maranhão',
    capital: 'São Luís',
    region: 'Nordeste',
    routeTo: ['Salvador']
  },
  {
    name: 'Mato Grosso',
    capital: 'Cuiabá',
    region: 'Centro Oeste',
    routeTo: ['Goiânia', 'Campo Grande', 'Vitória']
  },
  {
    name: 'Mato Grosso do Sul',
    capital: 'Campo Grande',
    region: 'Centro Oeste',
    routeTo: ['Cuiabá', 'Brasília']
  },
  {
    name: 'Minas Gerais',
    capital: 'Belo Horizonte',
    region: 'Sudeste',
    routeTo: ['Vitória', 'São Paulo']
  },
  {
    name: 'Pará',
    capital: 'Belém',
    region: 'Norte',
    routeTo: ['Porto Velho', 'Rio Branco']
  },
  {
    name: 'Paraíba',
    capital: 'João Pessoa',
    region: 'Nordeste',
    routeTo: ['Recife']
  },
  {
    name: 'Paraná',
    capital: 'Curitiba',
    region: 'Sul',
    routeTo: ['Rio de Janeiro', 'Florianópolis']
  },
  {
    name: 'Pernambuco',
    capital: 'Recife',
    region: 'Nordeste',
    routeTo: ['João Pessoa', 'Teresina']
  },
  {
    name: 'Piauí',
    capital: 'Teresina',
    region: 'Nordeste',
    routeTo: ['Recife', 'Natal']
  },
  {
    name: 'Rio de Janeiro',
    capital: 'Rio de Janeiro',
    region: 'Sudeste',
    routeTo: ['São Paulo', 'Curitiba']
  },
  {
    name: 'Rio Grande do Norte',
    capital: 'Natal',
    region: 'Nordeste',
    routeTo: ['Teresina', 'Aracaju']
  },
  {
    name: 'Rio Grande do Sul',
    capital: 'Porto Alegre',
    region: 'Sul',
    routeTo: ['Florianópolis']
  },
  {
    name: 'Rondônia',
    capital: 'Porto Velho',
    region: 'Norte',
    routeTo: ['Belém']
  },
  {
    name: 'Roraima',
    capital: 'Boa Vista',
    region: 'Norte',
    routeTo: ['Palmas', 'Salvador']
  },
  {
    name: 'Santa Catarina',
    capital: 'Florianópolis',
    region: 'Sul',
    routeTo: ['Curitiba', 'Porto Alegre']
  },
  {
    name: 'São Paulo',
    capital: 'São Paulo',
    region: 'Sudeste',
    routeTo: ['Belo Horizonte', 'Rio de Janeiro']
  },
  {
    name: 'Sergipe',
    capital: 'Aracaju',
    region: 'Nordeste',
    routeTo: ['Salvador', 'Natal']
  },
  {
    name: 'Tocantins',
    capital: 'Palmas',
    region: 'Norte',
    routeTo: ['Boa Vista', 'Rio Branco']
  }
];

const sameRegion = (departure, destination) => departure.region === destination.region;

const hasDirectRoute = (departure, destination, stateArray) => {
  const departureState = stateArray.find((state) => state.name === departure.name);
  const destinationState = stateArray.find((state) => state.name === destination.name);

  return departureState.routeTo.some((city) => city === destinationState.capital);
};
