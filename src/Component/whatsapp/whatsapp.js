import React, { useState } from 'react';






const Pangu = () =>{
    const [theArray, setTheArray] = useState([{data:''}]);
    const addEntryClick = () => {
        setTheArray([...theArray, {data:''} ]);
     
       
    };



    return(
        <div className='container'>
            <div className='row'>

                <div class="col-lg-12">
                    <input class="my-4" type="text" name="name" placeholder="Name" /> <br/>
                    <input class="my-4" type="email" name="email" placeholder="Email" /> <br/>
                    <button   type="submit" value="submit">Submit</button>
                </div>
            <div className='col-lg-4'>
                    
                {/* <input type="button" onClick={addEntryClick} value="Add" />, */}
                      
                    {/* <div>{theArray.map(entry =>
                      <div><input type="text" placeholder="Name" value={entry.data}/></div>
                       )}
                    </div> */}

            </div>
            <div className='col-lg-8'>
             {/* <p>Whatsapp box</p> */}

            </div>


            </div>

        </div>
    )
}



export default Pangu;