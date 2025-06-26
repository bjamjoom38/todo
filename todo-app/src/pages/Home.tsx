import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonList, IonIcon,IonCheckbox } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';
import { trash } from 'ionicons/icons';



const Home: React.FC = () => {
type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
};
const [task, setTask] = useState('');
const [tasks, setTasks] = useState<Task[]>([]);
useEffect(()=>{
  fetch("http://localhost:3000/todo").then(res=>{return res.json()}).then(data=>setTasks(data));
},[])
const addtasks = ():void =>{

 if ((task.trim()).length > 0){
  fetch("http://localhost:3000/todo",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title:task.trim()})
  }).then((res) => {
    return res.json();
  }).then((data) => {
    setTasks([...tasks, data]);
    setTask('');
  });
  
 }
 
}
const deletetasks = (index: number): void => {
  const task = tasks[index];

  if (task) {
    fetch(`http://localhost:3000/todo/${task.id}`, {
      method: "DELETE"
    }).then(() => {
      setTasks(tasks.filter((_, i) => i !== index));
    });
  }
};
const toggleComplete = (id: number, newValue: boolean): void => {
  fetch(`http://localhost:3000/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ isCompleted: newValue })
  }).then(() => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: newValue } : task
    ));
  });
};



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle {...{ part: "text" } as any}>ToDoList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput placeholder="what do you wanna do?" value={task} onIonChange={e=> setTask(e.detail.value!)}/>
        <IonButton onClick={addtasks}>Add!</IonButton>
        <IonList>
          {tasks.map((task,index)=> <><IonCheckbox checked={task.isCompleted}
  onIonChange={() => toggleComplete(task.id, !task.isCompleted)}></IonCheckbox><IonItem key={task.title}><IonLabel>{task.title}</IonLabel> <IonButton onClick={() => deletetasks(index)}><IonIcon icon={trash} /></IonButton></IonItem></>)}

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
