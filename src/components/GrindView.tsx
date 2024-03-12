import { useTasks } from "../hooks/useTasks";
import TaskList from "./TaskList";

export const GrindView = () => {
	const { tasks, isParsed, updateTask } = useTasks();

	if (isParsed === "parsing") {
		return <div>Parsing...</div>;
	}

	if (isParsed === "parsed") {
		return <TaskList
			tasks={tasks}
			updateTask={updateTask}
		/>;
	}

	if (isParsed === "error") {
		return <div>Error: cannot parsed</div>;
	}

	return <div>Something went wrong...</div>;
};
