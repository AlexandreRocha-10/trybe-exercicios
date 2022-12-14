function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        
        const dayItem = document.createElement('li');
        
        let day = decemberDaysList[index];
        
        dayItem.innerHTML = day;

        if (day === 24 || day === 31) {
   
            dayItem.className = 'day holiday'; 
            getDaysList.appendChild(dayItem); 

        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday'; 
            getDaysList.appendChild(dayItem);

        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            getDaysList.appendChild(dayItem);

        } else {
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
          }
    }
}

createDaysOfTheMonth();

function createButtonHoliday(holidays) {

    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');

    button.id = 'btn-holiday';
    button.innerHTML = holidays;

    buttonContainer.appendChild(button);

}

createButtonHoliday('feriados');

function changeColorHolidays() {

    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';
    let numColor = 'white';
    let originalColor = '#666';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
          getHolidays[index].style.color = originalColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
          getHolidays[index].style.color = originalColor;
          getHolidays[index].style.color = numColor;
        }
      }
    })
}

changeColorHolidays();

function createButtonFriday(friday) {

    let buttonFridayContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');

    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = friday;

    buttonFridayContainer.appendChild(buttonFriday);
}

createButtonFriday('Sexta-feira');

function modTextFriday() {
    
    let getFridayButton = document.querySelector('#btn-friday');
    let getFridays = document.getElementsByClassName('friday');
    let newText = 'Sexta-feira!!!';

    getFridayButton.addEventListener('click', function() {
        for (let i in getFridays) {
            if (getFridays[i].innerHTML !== newText) {
                getFridays[i].innerHTML = newText;
            } else {
                getFridays[i].innerHTML = friday[i];
            }
        } 
    })
}

modTextFriday([4, 11, 18, 25]);

function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '25px';
      event.target.style.fontWeight = '700';
    });
  }
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }

dayMouseOver();
dayMouseOut();

function addTask(task) {
    let taskContainer = document.querySelector('.my-tasks');
    let taskItem = document.createElement('span');

    taskItem.innerHTML = task;
    taskItem.style.color = 'blue';

    taskContainer.appendChild(taskItem);
}

addTask('Tarefa aleatória!');

function addSubtitle(backColor) {

    let taskContainer = document.querySelector('.my-tasks');
    let taskElement = document.createElement('div');

    taskElement.className = 'task';
    taskElement.style.backgroundColor = backColor;

    taskContainer.appendChild(taskElement);
}

addSubtitle('red');

function selectTask() {

    let selectElement = document.querySelector('.task');
    let selectedTask = document.getElementsByClassName('task selected');

    selectElement.addEventListener('click', function(event) {
        if (selectedTask.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    })
}

selectTask();

function changeColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
          } else if (eventTargetColor === taskColor) {
            event.target.style.color = 'rgb(119,119,119)';
          }
    });
  }

  changeColor();