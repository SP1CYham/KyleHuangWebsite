interface Fruits {
  id: number;
  name: string;
  cal: number;
}
interface ListProps {
  items?: Fruits[];
  category?: string;
}

export default function List({ items = [], category = "hi" }: ListProps) {
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}, calories: {item.cal}
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}
