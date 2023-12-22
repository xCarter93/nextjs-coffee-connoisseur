export interface CoffeeStore {
  fsq_id: string;
  name: string;
  location: { address: string };
  imageUrl: string;
}

export interface CoffeeStoreSearchResponse {
  results: CoffeeStore[];
}
