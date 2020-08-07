# REACT-REDUX-NODE APP

This is a basic react redux app with node and express backend. This app shows what surveys are asigned to each employee and what surveys can be assigned.

## Run the App

### `npm run dev`

You can start the app from the root folder by entering command ***npm run dev***
.<br/> Both node app and react app will run concurrently so you don't have to open two<br/> terminals to run both backend and frontend.

![run command](assets/run_command.png)<br/> <br/>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Actions

### `Selet Employee`

* You can select an employee from the dropdown menu.<br/><br/>

![select employee](assets/select_emp.png)

* After selecting the employee you will see the employee window. <br/><br/>

![selected employee](assets/selected.png)

### `Assign and Removing Surveys`

You can assign a survey to ***Assign Survey*** by clicking on
assign on Survey List. The assigned survey will get added to the
assigned survey table.<br/> <br/>

Similarly, you can remove a survey from Assigned Survey. The removed<br/>
survey gets added to ***Survey List***.

**Note: You cannot remove from Survey List and you cannot assign from Assigned Surveys**

