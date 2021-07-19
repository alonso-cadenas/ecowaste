import styles from './location.module.css';
import { Location as LocationModel } from '../../API';

type Props = {
  location: LocationModel;
};

export function Location({ location }: Props) {
  return (
    <section className={styles.location} id={'location'}>
      <h2>Nearest Drop-off Location</h2>
      <h3>{location.name}</h3>
      <p>
        {location.street}, {location.city}, {location.state} -{' '}
        {location.zipCode}
      </p>
    </section>
  );
}
