import { useRewards } from "../../hooks";
import styles from "./styles.module.css";

export default function Rewards() {
	const { rewards, isRewardsParsed } = useRewards();

	if (isRewardsParsed === "parsing") {
		return <div>Parsing...</div>;
	}

	if (isRewardsParsed === "parsed") {
		return (
			<div>
				<h2>Rewards</h2>

				<h3>Balance: 0 coins</h3>

				<ul className={styles.list}>
					{rewards.map((reward) => (
						<li className={styles.reward}>
							<div>
								<h3>{reward.title}</h3>
								<p>{reward.desc}</p>
							</div>
							<button>Buy: {reward.price} coins</button>
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (isRewardsParsed === "error") {
		return <div>Error: cannot parsed</div>;
	}

	return <div>Something went wrong...</div>;
}
