type Props = {
	limit: number | undefined
	setLimit: Function
};

export default function LimitFilter({ limit, setLimit }: Props) {
	return (
		<div>
			<label htmlFor="limit">Limit:</label>
			<input
				type="number"
				name="limit"
				id="limit"
				placeholder="Amount of showed tasks"
				value={limit ? limit : ""}
				onChange={(e) =>
					setLimit(
						e.currentTarget.value ? Number(e.currentTarget.value) : undefined,
					)
				}
			/>
		</div>
	);
};
