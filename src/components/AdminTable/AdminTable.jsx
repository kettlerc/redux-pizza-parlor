import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';




function AdminTable () {
    const orders = useSelector(store => store.orders)
    return (
        <>
        <Router>
        <header>
            <h1>Prime Pizza Orders</h1>
        </header>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Type</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                {/*<tr>{orders.map(order => {
                    return (
                    <td>{orders}</td>
                    )
                })}

            </tr>*/}
            </tbody>



        </table>
        <Route>
            
        </Route>
        </Router> 
        </>
       
    )
    
}

export default AdminTable;