import { Notice } from "obsidian";
import { useHistory, useRewards } from "../../hooks";
import styles from "./styles.module.css";

export default function Rewards() {
	const { rewards, isRewardsParsed } = useRewards();
	const { balance, isHistoryParsed, addHistoryRow } = useHistory();

	if (isRewardsParsed === "parsing" && isHistoryParsed === "parsing") {
		return <div>Parsing...</div>;
	}

	if (isRewardsParsed === "parsed" && isHistoryParsed === "parsed") {
		return (
			<div>
				<h2>Rewards</h2>

				<h3>Balance: {balance} coins</h3>

				<ul className={styles.list}>
					{rewards.map((reward) => (
						<li className={styles.reward}>
							<div>
								<h3>{reward.title}</h3>
								<p>{reward.desc}</p>
							</div>
							<button
								onClick={() => {
									console.log("clicked");
									addHistoryRow({
										title: reward.title,
										change: -reward.price,
										date: new Date(),
									});
									new Notice(
										`You purchase '${reward.title}': -${reward.price} ${reward.price > 1 ? "coins" : "coin"}`,
									);
								}}
								disabled={reward.price > balance}
							>
								Buy: {reward.price} coins
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (isRewardsParsed === "error" || isHistoryParsed === "error") {
		return <div>Error: cannot parsed</div>;
	}

	return <div>Something went wrong...</div>;
}
