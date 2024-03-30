import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr className={css.tableHeadRow}>
                    <th className={css.tableHeadItem}>Type</th>
                    <th className={css.tableHeadItem}>Amount</th>
                    <th className={css.tableHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((transaction) => (
                    <tr key={transaction.id} className={css.transRow}>
                        <td className={css.transItem}>{transaction.type}</td>
                        <td className={css.transItem}>{transaction.amount}</td>
                        <td className={css.transItem}>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}