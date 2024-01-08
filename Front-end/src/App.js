import "./App.css"
import Todo from "./component/Todo";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center vh-100">
            <div className="todo-header">
              <div className="sub-todo-header">
                <div className="top-heading">
                  <center> <h3> Add Todo </h3></center>
                  <br />
                  <div className="d-flex justify-content-around">
                  <input type="text" placeholder="Please Enter data" />
                  <div className="btn btn-success">submit</div>
                  </div>
                </div>
                <br />
                <div className="list-data">
                  <Todo text="hello"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
