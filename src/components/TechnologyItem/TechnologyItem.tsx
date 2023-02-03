import { FC } from 'react'
import { ITechnology } from '../../types/types';
import styles from './TechnologyItem.module.scss';

const TechnologyItem: FC<ITechnology> = ({ image, name }) => {
	return (
		<div className={styles.technologyItem}>
			<img className={styles.iconItem} src={image} alt={name} />
			<p className={styles.nameItem}>{name}</p>
		</div>
	)
}

export default TechnologyItem