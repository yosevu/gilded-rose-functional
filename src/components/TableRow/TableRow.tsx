import './TableRow.css';

type Item = {
    name: string,
    sellIn: number,
    quality: number
};

interface TableRowProps {
    item: Item
}

const TableRow = ({ item }: TableRowProps): JSX.Element => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quality}</td>
      <td>{item.sellIn}</td>
    </tr>
  );
}

export default TableRow
