import { useState } from "react";
import styles from './styles.module.css'

type Tab = {
	title: string;
	view: React.ComponentType<any>;
};

type Props = {
	tabs: Tab[];
};

export default function Tabs({ tabs }: Props) {
	const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

	return (
		<div>
			<ul className={styles.tabs}>
				{tabs.map((tab) => (
					<li>
						<button
							className={`${tab.title === activeTab.title ? styles.active : ""}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab.title}
						</button>
					</li>
				))}
			</ul>

			<activeTab.view />
		</div>
	);
}
