import styles from './item-list.module.css';

type Props = {
  items: string[];
};

export function ItemList({ items }: Props) {
  return (
    <section className={styles.itemList} id={'item-list'}>
      <ul>
        {items.map((i, key) => (
          <li key={key}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
