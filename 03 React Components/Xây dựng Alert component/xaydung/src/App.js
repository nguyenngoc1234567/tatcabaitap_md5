// import logo from './logo.svg';
import React from "react";
import Alert from "./component/Alert"



function App() {
    return (
        <React.Fragment>
         
              <div>
                  <h3>Alert</h3>
                  <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
              </div>
         
        </React.Fragment>
    );
}


export default App;