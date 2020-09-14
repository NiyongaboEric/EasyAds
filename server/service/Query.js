class Query {
  static async findOne(table, queryObject) {
    const oneRow = await table.findOne(queryObject);
    return oneRow;
  }

  static async create(table, queryObject) {
    const oneRow = await table.create(queryObject);
    return oneRow;
  }

  static async update(table, queryObject) {
    const rows = await table.update(...queryObject);
    return rows;
  }

  static async findAll(table, queryObject) {
    const allRows = await table.findAll(queryObject);
    return allRows;
  }

  static async destroy(table, queryObject) {
    const row = await table.destroy(queryObject);
    return row;
  }
}

export default Query;
