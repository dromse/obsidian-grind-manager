import { useHistory } from "../../hooks";
import styles from "./styles.module.css";

type Props = {};

export default function History({}: Props) {
	const { history, balance, isHistoryParsed } = useHistory();

	if (isHistoryParsed === "parsing") {
		return <div>Parsing...</div>;
	}

	if (isHistoryParsed === "parsed") {
		return (
			<div>
				<h2>History</h2>
				<h3>Balance: {balance} coins</h3>

				<table className={styles.table}>
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Change</th>
							<th scope="col">Date</th>
						</tr>
					</thead>

					<tbody>
						{history.map((row) => (
							<tr>
								<th scope="row">{row.title}</th>
								<td>{row.change > 0 ? "+" + row.change : row.change}</td>
								<td>
									{row.date.toLocaleTimeString([], {
										month: "numeric",
										day: "numeric",
										year: "numeric",
										hour: "2-digit",
										minute: "2-digit",
										hour12: false,
									})}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<ul></ul>
			</div>
		);
	}

	if (isHistoryParsed === "error") {
		return <div>Error: cannot parsed</div>;
	}

	return <div>Something went wrong...</div>;
}
