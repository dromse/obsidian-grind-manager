type Props = {
	searchFilter: string;
	setSearchFilter: Function;
};

export default function SearchFilter({
	searchFilter,
	setSearchFilter,
}: Props) {
	return (
		<input
			type="text"
			name=""
			id=""
			placeholder="Search tasks"
			value={searchFilter}
			onChange={(e) => setSearchFilter(e.currentTarget.value)}
		/>
	);
}
