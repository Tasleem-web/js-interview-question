class Query {

    constructor() {
        this._fields = ["*"];
        this._table = '';
        this._condidtion = [];
        this._sort = null;
        this._limit = null;
    }

    select(fields) {
        if (fields.length) this._fields.flat();
        return this;
    }

    // from table
    from(table) {
        this._table = table;
        return this;
    }

    // where condition
    where(condition) {
        this._condidtion.push(condition);
        return this;
    }

    // Orderby ACS/DSC sort
    orderBy(fields, direction = 'ASC') {
        this._sort = `${fields} ${direction}`;
        return this;
    }

    // limit
    limit(count) {
        this._limit = count;
        return this;
    }

    // build
    build() {
        let query = `select ${this._fields.join(', ')} from ${this._table}`
        if (this._condidtion.length) {
            query += 'where ' + this._condidtion.join(' AND ');
        }

        if (this._sort) {
            query += ' ORDER BY ' + this._sort;
        }

        if (this._limit) {
            query += ' LIMIT ' + this._limit;
        }
        return query;
    }

}

// Usage:
const sql = new SqlQueryBuilder()
  .select('id', 'email')
  .from('users')
  .where('verified = 1')
  .orderBy('id', 'DESC')
  .limit(10)
  .build();

console.log(sql);
// Output: SELECT id, email FROM users WHERE verified = 1 ORDER BY id DESC LIMIT 10