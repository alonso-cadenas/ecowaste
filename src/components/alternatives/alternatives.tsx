import styles from './alternatives.module.css';

type Props = {
  alternatives: Array<string>;
};

export function Alternatives({ alternatives }: Props) {
  return (
    <section id={'alternatives'}>
      <h2>Sustainable Alternatives</h2>
      <ul>
        {alternatives.map((a: string, index: number) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
