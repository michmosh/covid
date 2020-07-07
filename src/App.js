import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartComponent from './components/chart/chart.component';
import Table from './components/table/table.component';
import {hideChart} from './actions/country.actions';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  let showChart =  useSelector(state => state.countries.showChart);
  const dispatch = useDispatch();

  const showTable = ()=>{
    dispatch(hideChart())
  }
  
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div style={showChart ? {display:'none'} :{}}>
                    <Table />
                  </div>
                {
                  showChart ? 
                  <div>
                    <ChartComponent />
                    <button className="btn btn-primary" onClick={()=>{showTable()}}>Back</button>
                  </div>
                    :  
                    null
                }
                </div>
              </div>
            </div>
          </div>     
      </div>
      <Footer />
    </div>
      
  );
}

export default App;
