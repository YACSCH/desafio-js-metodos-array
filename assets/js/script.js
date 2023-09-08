const taskList = [
  {
    id: 1,
    task: "Despertar",
    completed: true,
  },
  {
    id: 2,
    task: "Hora de Bañarse",
    completed: false,
  },
  {
    id: 3,
    task: "Tomar Desayuno",
    completed: false,
  },
];

const taskResult = document.querySelector("#result-list");
const taskInput = document.querySelector("#txtTask");
const btnAdd = document.querySelector("#addTask");
const totalValue = document.querySelector("#total-value");
const totalFilled = document.querySelector("#total-filled");

btnAdd.addEventListener("click", () => {
  let id = 1;

  if (taskInput.value.trim() === "") return;

  const newId = taskList.slice(-1);

  if (newId.length!==0){
    id = newId[0].id + 1
  }

  const newTask = {
    id: id,
    task: taskInput.value,
    completed: false,
  };

  taskList.push(newTask);
  taskInput.value = "";

  renderTask();
});

function deleted(id) {
  const index = taskList.findIndex((ele) => ele.id == id);
  taskList.splice(index, 1);

  renderTask();
}

function filled(id) {
  const index = taskList.findIndex((ele) => ele.id == id);
  taskList[index].completed = !taskList[index].completed;
  renderTask();
}

function renderTask() {
  let html = "";
  totalValue.innerHTML = taskList.length;
  totalFilled.innerHTML = taskList.filter(task => task.completed).length;

  for (task of taskList) {
    html += `<tr>
                <td>${task.id}</td>
                <td>${task.task}</td>   
                <td><input type='checkbox' onclick='filled(${task.id})'  ${task.completed ? 'checked' : ''}    ></td>     
                <td><button class='btn' onclick='deleted(${task.id})'>X</button></td>
                <td>${task.completed ? "Realizada" : ""}</td>
                </tr> `;
  }
  taskResult.innerHTML = html;
}

renderTask();

