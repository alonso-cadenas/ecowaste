import styles from './alternatives.module.css';

type Props = {
  alternatives: String[];
};

export function Alternatives({ alternatives }: Props) {
  return (
    <section id={'alternatives'}>
      <h2>Alternatives</h2>
      <ul>
        {alternatives.map((a: string, index: number) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
