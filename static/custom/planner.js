function getTaskTemplate(value)
{
    html = `<li class="list-group-item d-flex align-items-center justify-content-end">
                <div class="d-flex mx-auto task-content">
                    ${value}
                </div>

                <div class="d-flex">
                    <button onclick="completeTask(event);" class="completeTask btn btn-success rounded-circle d-flex align-items-center justify-content-center ms-2 dynamic-button" style="width: 25px; height: 25px;">
                        <i class="bi bi-check-lg" disabled></i>
                    </button>        
                    
                    <button onclick="deleteTask(event);" class="deleteTask btn btn-danger rounded-circle d-flex align-items-center justify-content-center ms-2 dynamic-button" style="width: 25px; height: 25px;">
                        <i class="bi bi-trash" disabled></i>
                    </button> 

                    <button class="recordTask btn btn-primary rounded-circle d-flex align-items-center justify-content-center ms-2 dynamic-button" style="width: 25px; height: 25px;">
                        <i class="bi bi-send"></i>
                    </button> 
                </div>
            </li>`
    return html;
}

function completeTask(event)
{
    setTimeout(() => {
        let button = event.target.closest('.completeTask');
        let task = button.parentElement.parentElement;
        task.remove();
    }, 200);
    return;
}

function deleteTask(event)
{
    setTimeout(() => {
        let button = event.target.closest('.deleteTask');
        let task = button.parentElement.parentElement;
        task.remove();
    }, 200)
    return;
}

function recordTask(event)
{
    let button = event.target.closest('.recordTask');
    // do something, and send to back end
    return;
}

document.addEventListener('DOMContentLoaded', function() {
    new Sortable(listOfTasks, {
        animation: 100,
        ghostClass: 'sortable-ghost',
        delay: 100,
    });
})

document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.querySelector('#addTask');
    addButton.addEventListener('click', function() {
        let input = document.querySelector('#inputTask');
        if (input.value) {
            let list = document.querySelector('#listOfTasks');
            
            let tempHTML = list.innerHTML;

            html = getTaskTemplate(input.value).concat(tempHTML);

            list.innerHTML = html;

            input.value = '';
        }
    })

    let inputThing = document.querySelector("#inputTask");
    inputThing.addEventListener('keydown', function(event) {
        if (event.key == "Enter") {
            addButton.click();
        }
    })

    let saveButton = document.querySelector('#saveTasks');
    saveButton.addEventListener('click', function() {
        // Send to back end
        return;
    })
})