import React, { useState } from 'react';
import './Details.css'
import { Button } from 'react-bootstrap';

const Details = (props) => {
    const [count, setCount] = useState([])
    const AddToBreak = (props) => {
        setCount(props);
    }

    const { cart } = props;
    let time = 0;
    for (const times of cart) {
        time = time + times.time;
    }

    return (
        <div className='exercise-details container-fluid'>
            <div className='d-flex mt-3'>
                <div className='details'>
                    <img src="https://uplandstudio.ca/wp-content/uploads/2020/05/DSC_191120_102-3.jpg" alt="" />
                </div>
                <div className='ms-3'>
                    <h5 className='fw-bold'>Ishtiaq Robin</h5>
                    <p>Faridpur, Dhaka</p>
                </div>
            </div>

            <section>
                <div className='my-4 d-flex justify-content-between mx-auto border border-1 rounded-2 px-3 pt-2 mt-5 my-bio-data' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h3>70kg</h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>6.4</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>21</h3>
                        <p>Age</p>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='fw-bold mt-5'>Add A Break</h5>
                <div className='break d-flex justify-content-between border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <button onClick={() => { AddToBreak(10) }}>10s</button>
                    </div>
                    <div>
                        <button onClick={() => { AddToBreak(20) }}>20s</button>
                    </div>
                    <div>
                        <button onClick={() => { AddToBreak(30) }}>30s</button>
                    </div>
                    <div>
                        <button onClick={() => { AddToBreak(40) }}>40s</button>
                    </div>
                    <div>
                        <button onClick={() => { AddToBreak(50) }}>50s</button>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='fw-bold mt-5'>Exercise Details</h5>
                <div className='d-flex justify-content-between mx-auto border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h6 className='fw-bold '>Exercise time</h6>
                    </div>
                    <div>
                        <span>{time}</span> seconds
                    </div>
                </div>
                <div className='d-flex justify-content-between border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h6 className='fw-bold'>Break time</h6>
                    </div>
                    <div>
                        <span>{count}</span> seconds
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <Button className='bg-primary mb-2 py-3 px-5 w-100 mt-5'>Activity Completed</Button>
                </div>
            </section>

        </div>
    );
};

export default Details;