
def get_uoms(db_conn):
    cursor = db_conn.cursor()
    query = "SELECT * FROM uom"
    cursor.execute(query)
    uom_list = []
    for (uom_id, uom_name) in cursor:
        uom_list.append({
            'uom_id': uom_id,
            'uom_name': uom_name
        })
    return uom_list


if __name__ == '__main__':
    from sql_connection import get_sql_connection

    db_conn = get_sql_connection()
    print(get_uoms(db_conn))