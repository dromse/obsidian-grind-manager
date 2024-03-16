import History from "./History";
import Rewards from "./Rewards";
import Tabs from "./Tabs";
import Tasks from "./Tasks";

export const GrindApp = () => {
	const tabs = [
		{ title: "Tasks", view: Tasks },
		{ title: "Rewards", view: Rewards },
		{ title: "History", view: History },
	];

	return <Tabs tabs={tabs} />;
};
