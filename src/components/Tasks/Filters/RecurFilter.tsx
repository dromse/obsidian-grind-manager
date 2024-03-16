import styles from '../styles.module.css'

type Props = { isRecur: boolean; setIsRecur: Function };

export default function RecurFilter({ isRecur, setIsRecur }: Props) {
	return (
		<div className={styles.filter}>
			<label htmlFor="is-recur">Is task recurring? (today)</label>

			<input
				type="checkbox"
				name="is-recur"
				id="is-recur"
				checked={isRecur}
				onChange={() => setIsRecur(!isRecur)}
			/>
		</div>
	);
}
