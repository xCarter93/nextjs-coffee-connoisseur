import { AirtableRecordType, CoffeeStoreType } from "@/types";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  "appTESLXE7vvfMYN5",
);

const table = base("coffee-stores");

const getMinifiedRecords = (records: Array<AirtableRecordType>) => {
  return records.map((record: AirtableRecordType) => {
    return {
      recordId: record.id,
      ...record.fields,
    };
  });
};

const findRecordByFilter = async (id: string) => {
  const findRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();
  return getMinifiedRecords(findRecords);
};

export const createCoffeeStore = async (
  coffeeStore: CoffeeStoreType,
  id: string,
) => {
  const { name, address, voting, imageUrl } = coffeeStore;
  try {
    if (id) {
      const records = await findRecordByFilter(id);

      if (records.length === 0) {
        const createRecords = await table.create([
          {
            fields: {
              id,
              name,
              address,
              voting,
              imageUrl,
            },
          },
        ]);
        if (createRecords.length > 0) {
          console.log("Record created", createRecords);
          return getMinifiedRecords(createRecords);
        }
      } else {
        console.log("Record already exists");
        return records;
      }
    } else {
      console.error("No id found");
    }
  } catch (error) {
    console.error("Error creating a record", error);
  }
};

export const updateCoffeeStore = async (id: string) => {
  try {
    if (id) {
      const records = await findRecordByFilter(id);
      const updatedVoting = records[0].voting + 1;
      if (records.length !== 0) {
        const updateRecords = await table.update([
          {
            id: records[0].recordId,
            fields: {
              voting: updatedVoting,
            },
          },
        ]);
        if (updateRecords.length > 0) {
          console.log("Record updated", updateRecords);
          return getMinifiedRecords(updateRecords);
        }
      } else {
        console.log("Coffee store not found");
        return records;
      }
    } else {
      console.error("No id found");
    }
  } catch (error) {
    console.error("Error upvoting a record", error);
  }
};
