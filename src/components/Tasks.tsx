import { useTasks } from "../hooks/useTasks";
import TaskList from "./TaskList";

type Props = {};

export default function TaskView({}: Props) {
	const { tasks, isTasksParsed, updateTask } = useTasks();

	if (isTasksParsed === "parsing") {
		return <div>Parsing...</div>;
	}

	if (isTasksParsed === "parsed") {
		return (
			<div>
				<h2>Tasks</h2>

				<TaskList
					tasks={tasks}
					updateTask={updateTask}
				/>
			</div>
		);
	}

	if (isTasksParsed === "error") {
		return <div>Error: cannot parsed</div>;
	}

	return <div>Something went wrong...</div>;
}
