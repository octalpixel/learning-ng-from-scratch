# Where do we start ? 
1. I need to make the UI 
Start with mock UI and build late on

2. See where are am storing the data ? 
Use variables => store as an array of the todo

3. What structure of the storing data ?  What are the fields
task, isCompleted,isDeleted, created_at




## Process

### Adding Todo
1. The user enters todo title
2. The user press save 
3.  Item gets added to the array of items

### List items
1. Loops through all the items array
2. Create html structure


### Persist Todo Items
#### Save
1. When user creates todo item same to localstorage

#### Load
1. When page is loaded get data from localstorage
2. Add data to the variable



----- Home Works


### Delete Data
1. When the user clicks on the delete button
2. Check the index of the item 
3. Remove the item from the array
4. Load the list

### Delete Data : v2
1. When the user clicks on the delete button
2. Check the index of the item 
3. set isDeleted to true
4. Gray out delete / have another list for deleted
5. Load the list


### Mark as completed
1. When the user click on mark as completed
2. Get the index
3. set isCompleted to true
4. Strike out the text
5. Load list
