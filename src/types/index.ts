export type CoffeeStoreType = {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  href: string;
  voting: number;
};

export type AirtableRecordType = {
  id: string;
  recordId: string;
  fields: CoffeeStoreType;
};

export type MapboxType = {
  id: string;
  properties: {
    address: string;
  };
  text: string;
};

export type ServerParamsType = {
  params: { id: string };
  searchParams: { id: string };
};
