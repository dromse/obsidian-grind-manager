import { StatusFilterOption } from "../TaskList";
import { Statuses } from "../../../hooks/useTasks/middleware/status";

type Props = {
	currentStatusFilter: StatusFilterOption;
	setCurrentStatusFilter: Function;
};

export default function StatusFilter({
	currentStatusFilter,
	setCurrentStatusFilter,
}: Props) {
	return (
		<div>
			<label htmlFor="status">Filter by status:</label>
			<select
				name="status"
				id="status"
				value={currentStatusFilter}
				onChange={(e) =>
					setCurrentStatusFilter(e.currentTarget.value as StatusFilterOption)
				}
			>
				<option value="all">all</option>

				{Statuses.map((status) => (
					<option value={status}>{status}</option>
				))}
			</select>
		</div>
	);
}
