import { IStatusFilter } from '.';
import { Statuses } from '../../hooks/useTasks/middleware/status';

type Props = {
	currentStatusFilter: IStatusFilter
	setCurrentStatusFilter: Function
};

export default function StatusFilter({ currentStatusFilter, setCurrentStatusFilter }: Props) {
	return (
		<>
			<label htmlFor="status">Filter by status:</label>
			<select
				name="status"
				id="status"
				value={currentStatusFilter}
				onChange={(e) =>
					setCurrentStatusFilter(e.currentTarget.value as IStatusFilter)
				}
			>
				<option value="all">all</option>

				{Statuses.map(status =>
					<option value={status}>{status}</option>
				)}
			</select>
		</>
	);
};
