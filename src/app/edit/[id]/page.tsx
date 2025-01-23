import { TaskForm } from "../../components/TaskForm";

export default function EditPage({ params }: { params: { id: string } }) {
  return <TaskForm id={params.id} />;
}
