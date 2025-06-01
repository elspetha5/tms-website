import "./unordered-list.scss";

interface UnorderedListProps {
  list: { title?: string; text?: React.ReactNode }[];
  listName: string;
}

function UnorderedList(props: UnorderedListProps) {
  const { list, listName } = props;
  return (
    <ul>
      {list.map((item, i) => (
        <li key={`${listName}${i}`}>
          {item.title && <div className="ul-title">{item.title}</div>}
          {item.text && <div className="ul-text">{item.text}</div>}
        </li>
      ))}
    </ul>
  );
}

export default UnorderedList;
