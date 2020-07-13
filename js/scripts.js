// Citation: line 3 to 16 and 27 to 79 are taken from James Grieve in class "js practice - Shopping List" example. 
// Link: https://github.com/TECHCareers-by-Manpower/js-practice
{
    console.log("Script starting!");
    // querySelector will use CSS selector syntax to select HTML elements.
    
    // <input type="text">
    const input = document.querySelector("input");
    // <a href="#">Add Item</a>
    const addButton = document.querySelector("ab");
    // <ul class="empty">
    const list = document.querySelector("section>ul");
    // <p id="error-output"></p>
    const error = document.querySelector("#error-output");
    // Running list of all our items.
    itemArray = [];

    // Button delete to make a function to hide the current list item
    close = document.getElementsByClassName("close");
   
    // Button complete function to bring date to completed to-do list.
    const list1 = document.querySelector("section1>ul");   
    
    // Button complete function to bring item to completed to-do list.
    complete = document.getElementsByClassName("complete");

    addButton.addEventListener("click", () =>
        {
            // Keep track of if the current submission has an error.
            errors = false;

            // If the input is empty.
            if (input.value.trim() === "")
            {
                error.innerText = "Please enter a To-Do item before attempting to add it.";
                errors = true;
            }
            // If the input already exists.
            if (itemArray.includes(input.value.trim().toLowerCase()))
            {
                error.innerText = "The To-Do item is already listed.";
                errors = true;
            }
            
            // Prevent Empty List Items (Including Whitespace) and Prevent Duplicate List Items (Case Insensitive)
            if (!errors)
            {
                // Clear any errors from previous submissions if this one is valid.
                error.innerText = "";

                // 1. Create a list item element.
                newListItem = document.createElement("li");

                // 2. Add the text from the text field to the list item.
                // P.S. Also removing trailing and leading whitespace.
                newListItem.innerText = input.value.trim();

                // Convert to Lowercase for Case Insensitivity
                itemArray.push(input.value.trim().toLowerCase());

                if (list.className === "empty")
                {
                    // 3a. If it is the first item, remove the empty class from
                    // the list.
                    list.classList.remove("empty");
                
                    // 3b. If it is the first item, remove the "No items yet!" item.
                    // If the list still has the empty class, it should only
                    // have the "no items" li.
                    list.children[0].remove();
                }
                // 3. Add the list item to the list.
                list.appendChild(newListItem);
                    
                // 4. Clear the text input. 
                input.value = "";

                // Reset Focus To Input After Adding
                input.focus();

                // Add checkbox to Active To-Dos item.
                // Citation: w3schools.com
                // Link: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_create
                /*checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                newListItem.appendChild(checkbox);*/

                // Input Date and Time.
                // Citation: phonixnap.com
                // Link: https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
                const today=new Date();
                dateTime = document.createElement("DATETIME");
                textDateTime = document.createTextNode("Start: " + (today.getMonth()+1)+'-'+today.getDate()+' '+today.getFullYear()+'-'+today.getHours()+ ':' +today.getMinutes()+ ':' +today.getSeconds());

                // Button complete text and function.
                // Citation: Pure JavaScript To-do List - CodePen
                // https://codepen.io/franklynroth/pen/ZYeaBd
                buttonComplete = document.createElement("BUTTONCOMPLETE");
                textComplete = document.createTextNode("Complete");
                buttonComplete.className = "complete";
                
                // Button delete text and function.
                buttonDelete = document.createElement("BUTTONDELETE");
                textDelete = document.createTextNode("Delete");
                buttonDelete.className = "close";

                // Display Date-time.
                dateTime.appendChild(textDateTime);
                newListItem.appendChild(dateTime);

                // Display button complete on active to-do list items.
                buttonComplete.appendChild(textComplete);
                newListItem.appendChild(buttonComplete);

                // Display button delete on active to-do list items.
                buttonDelete.appendChild(textDelete);
                newListItem.appendChild(buttonDelete);

                // Button delete function.
                // Citation: How To Create a To Do List - W3Schools
                // Link: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
                for (i = 0; i < close.length; i++) {
                    close[i].onclick = function () {
                        div = this.parentElement;
                        div.style.display = "none";
                    }
                }

                // Button complete function.
                // Citation: How To Create a To Do List - W3Schools
                // Link: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
                for (i = 0; i < complete.length; i++) {
                    complete[i].onclick = function () 
                    {
                        // Button complete function.
                        sectionorigin = this.parentElement;  

                        // Button complete function.
                        list1Item = document.createElement("li");

                        // Remove button complete in complete to-do items.
                        list1Item.innerText = sectionorigin.children[1].remove();

                        // Button complete press to move list to complete to-do list.
                        list1.appendChild(sectionorigin); 
                        
                        // Display end date and time. 
                        // Citation: phonixnap.com
                        // Link: https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
                        dateTimeEnd = document.createElement("DATETIMEEND");
                        const today = new Date();
                        textDateTimeEnd = document.createTextNode("End: " + (today.getMonth()+1)+'-'+today.getDate()+' '+today.getFullYear()+'-'+today.getHours()+ ':' +today.getMinutes()+ ':' +today.getSeconds());
                        dateTimeEnd.appendChild(textDateTimeEnd);
                        sectionorigin.appendChild(dateTimeEnd);
                    }
                }
            }
        }
    );
    console.log("Script ending!");
}