import styles from './item-list.module.css';
import { Item } from '../../API';

type Props = {
  items: Item[];
};

export function ItemList({ items }: Props) {
  return (
    <section id={'item-list'}>
      <ul>
        {items.map((i, key) => (
          <li key={key}>
            <a href={`/item/${i.id}`} key={i.id} className={styles.link}>
              <h4>{i.name}</h4>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
