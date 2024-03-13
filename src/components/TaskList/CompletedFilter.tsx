import { ICompletedFilter } from '.';

type Props = {
	currentCompletedFilter: ICompletedFilter
	setCurrentCompletedFilter: Function
};

export default function CompletedFilter({ currentCompletedFilter, setCurrentCompletedFilter }: Props) {
	return (
		<>
			<label htmlFor="completed">Filter by completed:</label>
			<select
				name="completed"
				id="completed"
				value={currentCompletedFilter}
				onChange={(e) =>
					setCurrentCompletedFilter(e.currentTarget.value as ICompletedFilter)
				}
			>
				<option value="all">all</option>
				<option value="uncompleted">uncompleted</option>
				<option value="completed">completed</option>
			</select>
		</>
	);
};
