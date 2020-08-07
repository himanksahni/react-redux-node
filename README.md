# REACT-REDUX-NODE APP

This is a basic react redux app with node and express backend. This app shows what surveys are asigned to each employee and what surveys can be assigned.

## Run the App

### `npm run dev`

You can start the app from the root folder by entering command ***npm run dev***
.<br/> Both node app and react app will run concurrently so you don't have to open two<br/> terminals to run both backend and frontend.

<!-- ![run command](assets/run_command.png)<br/> <br/> -->
<img src="/assets/run_command.png"  width="400" height="300" alt="run command"> <br/>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Actions

### `Selet Employee`

* You can select an employee from the dropdown menu.<br/><br/>

<img src="/assets/select_emp.png"  width="400" height="300" alt="select employee">

* After selecting the employee you will see the employee window. <br/><br/>

<img src="/assets/selected.png"  width="400" height="300" alt="selected employee">

### `Assign and Removing Surveys`

You can assign a survey to ***Assign Survey*** by clicking on
assign on Survey List. The assigned survey will get added to the
assigned survey table.<br/> <br/>

Similarly, you can remove a survey from Assigned Survey. The removed
survey gets added to ***Survey List***.

**Note: You cannot remove from Survey List and you cannot assign from Assigned Surveys**


### `Search`

You can search a specific survey from the search bar.

<img src="/assets/search.png"  width="400" height="300" alt="search">

### `Dummy Survey and Employee array`

You can check the dummy Surveys and Employee array by using ***Postman*** or
from your browser by going to <br/>

* [http://localhost:7000/surveys](http://localhost:7000/surveys) for survey array and,
* [http://localhost:7000/employees](http://localhost:7000/employees) for employee array

<img src="/assets/dummy.png"  width="500" height="300" alt="dummy arrays">

