export interface CoffeeStore {
  fsq_id: string;
  name: string;
  address: string;
  imageUrl: string;
}

export interface CoffeeStoreSearchResponse {
  results: CoffeeStore[];
}
