interface IWeaponsMock {
  descricao: string
  arma: string
  status: 'Concluído' | 'Em andamento' | 'Falhou'
  preco: number
  tipo: string
}

export const weaponsMock: IWeaponsMock[] = [
  // 1
  {
    descricao: 'Kumicho Dragon',
    arma: 'Desert Eagle',
    status: 'Concluído',
    preco: 2000,
    tipo: 'Alugado',
  },

  // 2
  {
    descricao: 'Kumicho Dragon',
    arma: 'Desert Eagle',
    status: 'Em andamento',
    preco: 2000,
    tipo: 'Comprado',
  },

  // 3
  {
    descricao: 'Kumicho Dragon',
    arma: 'Desert Eagle',
    status: 'Falhou',
    preco: 2000,
    tipo: 'Alugado',
  },

  // 3
  {
    descricao: 'Kumicho Dragon',
    arma: 'Desert Eagle',
    status: 'Falhou',
    preco: 2000,
    tipo: 'Comprado',
  },
]