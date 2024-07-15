document.addEventListener('DOMContentLoaded', function () {
    const maxVisibleCards = 4;
    let taskCount = 4;
    const scrollBar = document.getElementById('scroll_bar');
    const intervalTime = 2200; 
    let autoScrollInterval;

    // Pre-existing task cards
    const initialTasks = [
        // test task
    ];

    initialTasks.forEach(task => addTaskCard(task.title, task.description));
    
    // check if status exceededs the max
    if (initialTasks.length > maxVisibleCards) {
        taskCount = initialTasks.length;
        startAutoScroll();
    }

    document.getElementById('add_task').addEventListener('click', function () {
        // Create the popup form
        const popup = document.createElement('div');
        popup.id = 'popup_form';
        popup.style.position = 'fixed';
        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '20px';
        popup.style.backgroundColor = 'white';
        popup.style.border = '3px solid black';
        popup.style.zIndex = '1000';

        const form = `
            <h2>Add New Task</h2>
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title"><br><br>
            <label for="description">Description:</label><br>
            <textarea id="description" name="description"></textarea><br><br>
            <label for="done">Done:</label>
            <input type="checkbox" id="done" name="done"><br><br>
            <button id="save_task">Save</button>
            <button id="cancel_task">Cancel</button>
        `;
        popup.innerHTML = form;
        document.body.appendChild(popup);

        // Cancel button functionality
        document.getElementById('cancel_task').addEventListener('click', function () {
            document.body.removeChild(popup);
        });

        // Save button functionality
        document.getElementById('save_task').addEventListener('click', function () {
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const done = document.getElementById('done').checked;
            const date = new Date().toLocaleDateString();

            if (title && description) {
                addTaskCard(title, description, done, date);
                taskCount++;

                if (taskCount > maxVisibleCards && !autoScrollInterval) {
                    startAutoScroll();
                }

                document.body.removeChild(popup);
            } else {
                alert('Please fill in all fields.');
            }
        });
    });

    function addTaskCard(title, description, done, date) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task_card');
        taskCard.innerHTML = `
            <h3>${title}</h3>
            <div class="group_date_check">
                <p id="date">${date}</p>
                <div class="checked">
                    <input type="checkbox" name="Done" ${done ? 'checked' : ''} />
                    <label for="Done">Done</label>
                </div>
            </div>
            <p class="text">${description}</p>
        `;
        scrollBar.appendChild(taskCard);

        // Add event listeners for hover effects
        taskCard.addEventListener('mouseenter', () => {
            taskCard.style.boxShadow = '0px 0px 10px 5px purple';
            stopAutoScroll();
        });

        taskCard.addEventListener('mouseleave', () => {
            taskCard.style.boxShadow = 'none';
            startAutoScroll();
        });
    }

    function startAutoScroll() {
        stopAutoScroll(); // Ensure any previous interval is cleared
        autoScrollInterval = setInterval(() => {
            const firstCard = scrollBar.firstElementChild;
            firstCard.style.transition = 'transform 1.1s, opacity 1.1s'; // Increased by 10%
            firstCard.style.transform = 'translateY(100%)';
            firstCard.style.opacity = '0';

            setTimeout(() => {
                scrollBar.appendChild(firstCard);
                firstCard.style.transition = 'none';
                firstCard.style.transform = 'translateY(0)';
                firstCard.style.opacity = '1';
            }, 1100); // Increased by 10%
        }, intervalTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     const maxVisibleCards = 4;
//     let taskCount = 4;
//     const scrollBar = document.getElementById('scroll_bar');
//     const intervalTime = 2000;
//     let autoScrollInterval;

//     document.getElementById('add_task').addEventListener('click', function () {
//         // Create the popup form
//         const popup = document.createElement('div');
//         popup.id = 'popup_form';
//         popup.style.position = 'fixed';
//         popup.style.left = '50%';
//         popup.style.top = '50%';
//         popup.style.transform = 'translate(-50%, -50%)';
//         popup.style.padding = '20px';
//         popup.style.backgroundColor = 'white';
//         popup.style.border = '1px solid black';
//         popup.style.zIndex = '1000';

//         const form = `
//             <h2>Add New Task</h2>
//             <label for="title">Title:</label><br>
//             <input type="text" id="title" name="title"><br><br>
//             <label for="description">Description:</label><br>
//             <textarea id="description" name="description"></textarea><br><br>
//             <label for="done">Done:</label>
//             <input type="checkbox" id="done" name="done"><br><br>
//             <button id="save_task">Save</button>
//             <button id="cancel_task">Cancel</button>
//         `;
//         popup.innerHTML = form;
//         document.body.appendChild(popup);

//         // Cancel button functionality
//         document.getElementById('cancel_task').addEventListener('click', function () {
//             document.body.removeChild(popup);
//         });

//         // Save button functionality
//         document.getElementById('save_task').addEventListener('click', function () {
//             const title = document.getElementById('title').value;
//             const description = document.getElementById('description').value;
//             const done = document.getElementById('done').checked;
//             const date = new Date().toLocaleDateString();

//             if (title && description) {
//                 addTaskCard(title, description, done, date);
//                 taskCount++;

//                 if (taskCount > maxVisibleCards && !autoScrollInterval) {
//                     startAutoScroll();
//                 }

//                 document.body.removeChild(popup);
//             } else {
//                 alert('Please fill in all fields.');
//             }
//         });
//     });

//     function addTaskCard(title, description, done, date) {
//         const taskCard = document.createElement('div');
//         taskCard.classList.add('task_card');
//         taskCard.innerHTML = `
//             <h3>${title}</h3>
//             <div class="group_date_check">
//                 <p id="date">${date}</p>
//                 <div class="checked">
//                     <input type="checkbox" name="Done" ${done ? 'checked' : ''} />
//                     <label for="Done">Done</label>
//                 </div>
//             </div>
//             <p class="text">${description}</p>
//         `;
//         scrollBar.appendChild(taskCard);
//     }

//     function startAutoScroll() {
//         autoScrollInterval = setInterval(() => {
//             const firstCard = scrollBar.firstElementChild;
//             firstCard.style.transition = 'transform 1s, opacity 1s';
//             firstCard.style.transform = 'translateY(100%)';
//             firstCard.style.opacity = '0';

//             setTimeout(() => {
//                 scrollBar.appendChild(firstCard);
//                 firstCard.style.transition = 'none';
//                 firstCard.style.transform = 'translateY(0)';
//                 firstCard.style.opacity = '1';
//             }, 900);
//         }, intervalTime);
//     }
// });
