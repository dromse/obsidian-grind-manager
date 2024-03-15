import Daily from "./Daily";
import Recur from "./Recur";
import Rewards from "./Rewards";
import Tabs from "./Tabs";
import Tasks from "./Tasks";

export const GrindApp = () => {
	const tabs = [
		{ title: "Tasks", view: Tasks },
		{ title: "Recur", view: Recur },
		{ title: "Daily", view: Daily },
		{ title: "Rewards", view: Rewards },
	];

	return <Tabs tabs={tabs} />;
};
