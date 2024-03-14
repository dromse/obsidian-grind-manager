import { CompletedFilterOption } from "..";

type Props = {
	currentCompletedFilter: CompletedFilterOption;
	setCurrentCompletedFilter: Function;
};

export default function CompletedFilter({
	currentCompletedFilter,
	setCurrentCompletedFilter,
}: Props) {
	return (
		<div>
			<label htmlFor="completed">Filter by completed:</label>
			<select
				name="completed"
				id="completed"
				value={currentCompletedFilter}
				onChange={(e) =>
					setCurrentCompletedFilter(e.currentTarget.value as CompletedFilterOption)
				}
			>
				<option value="all">all</option>
				<option value="uncompleted">uncompleted</option>
				<option value="completed">completed</option>
			</select>
		</div>
	);
}
