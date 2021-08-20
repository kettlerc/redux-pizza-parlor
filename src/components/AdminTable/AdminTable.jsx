import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';




function AdminTable () {
    const orders = useSelector(store => store.ContactFormReducer)
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
                    <td>Type</td>
                    
                </tr>
            </thead>
            <tbody>
                <tr>{orders.map(order => {
                    return (
                    <div>
                    <td>{order.customer_name}</td>
                    <td>{order.type}</td>
                    </div>
                    )
                })}

            </tr>
            </tbody>



        </table>
        <Route>
            
        </Route>
        </Router> 
        </>
       
    )
    
}

export default AdminTable;