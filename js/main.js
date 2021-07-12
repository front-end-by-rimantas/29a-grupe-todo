import { Form } from "./components/form/Form.js";
import { Todo } from "./components/todo/Todo.js";

const form = new Form('body');
const tasks = new Todo('body');

form.init();
tasks.init();