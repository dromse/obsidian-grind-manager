import {
	DepositoryTransactionState,
	DEPOSITORY_TRANSACTION_STATE,
	useDepository
} from "@hooks/useDepository";
import { UseHistoryReturn } from "@hooks/useHistory";
import { isDigitString } from "@utils/check";
import { Notice } from "obsidian";
import React, { useState } from "react";
import { coins } from "./RewardList";

type DepositoryProps = {
	history: UseHistoryReturn;
} & React.ComponentPropsWithoutRef<"div">;

export default function Depository(props: DepositoryProps): React.JSX.Element {
	const { history, ...dialogAttributes } = props;
	const [inputValue, setInputValue] = useState("");
	const [amount, setAmount] = useState(0);

	const { balance, store, restore } = useDepository(history);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.currentTarget.value;

		setAmount(0)
		setInputValue(value);

		if (isDigitString(value)) {
			setAmount(Number(value));
		}
	};

	const clear = (): void => {
		setAmount(0);
		setInputValue("");
	};

	const handleTransactionState = (state: DepositoryTransactionState): void => {
		switch (state) {
			case DEPOSITORY_TRANSACTION_STATE.SUCCESS:
				break;

			case DEPOSITORY_TRANSACTION_STATE.NEGATIVE_PARAM:
				new Notice("You cannot get the negative amount of coins.");
				break;

			case DEPOSITORY_TRANSACTION_STATE.ZERO_PARAM:
				new Notice("You cannot get zero coins.");
				break;

			case DEPOSITORY_TRANSACTION_STATE.OVER_BALANCE_PARAM:
				new Notice("You cannot get coins which is over the balance.");
				break;

			case DEPOSITORY_TRANSACTION_STATE.ERROR:
				new Notice("Something went wrong...");
				break;
		}
	};

	const handleStore = async (): Promise<void> => {
		const state = await store(amount);

		handleTransactionState(state);

		clear();
	};

	const handleRestore = async (): Promise<void> => {
		const state = await restore(amount);

		handleTransactionState(state);

		clear();
	};

	return (
		<div {...dialogAttributes}>
			<div>Depository: {coins(balance)}</div>

			<input
				type="number"
				style={{ width: "100%" }}
				placeholder="input coins"
				value={inputValue}
				onChange={handleInput}
			/>

			<div style={{ display: "flex", width: "100%", gap: "10px" }}>
				<button
					style={{ flex: 1 }}
					onClick={handleStore}
				>
					Store
				</button>

				<button
					style={{ flex: 1 }}
					onClick={handleRestore}
				>
					Restore
				</button>
			</div>
		</div>
	);
}
