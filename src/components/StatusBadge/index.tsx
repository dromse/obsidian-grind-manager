import { Status } from "../../hooks/useTasks/middleware/status";
import styles from './styles.module.css'

type BadgeProps = {
	status: Status;
};

export default function StatusBadge({ status }: BadgeProps) {
	return (
		<span className={`${styles.badge} ${styles[status]}`}>
			{status}
		</span>
	);
}
