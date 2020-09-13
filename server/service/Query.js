class Query {
  static async findOne(table, queryObject) {
    const oneRow = await table.findOne(queryObject);
    return oneRow;
  }

  static async create(table, queryObject) {
    const oneRow = await table.create(queryObject);
    return oneRow;
  }
}

export default Query;
