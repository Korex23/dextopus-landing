export interface Transaction {
  type: 'deposit' | 'withdrawal'
  chain: string
  chainDisplay: string
  token: string
  amount: string
  time: string
  address?: string
}

export interface City {
  name: string
  lat: number
  lon: number
}

export interface Arc {
  start: City
  end: City
  progress: number
}
