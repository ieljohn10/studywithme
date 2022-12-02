const callbackFunction = () => {

// Example of callback function
    const a = () => {
        console.log('I am A');
    }
    const b = (callback) => {
        console.log('I am B');
        callback();
        console.log('-----------------')
    }

    b(a);

    // Example function without a callback
    const processMe = (x,y,ops) => {
        // x and y is a number
        // ops is a string
        
        if (ops === 'add'){
            return x + y;
        } else if(ops === 'sub'){
            return x - y;
        }
    };
    console.log('NO CALLBACK EXAMPLE [see the code]')
    let resAdd = processMe(2,7,'add');
    console.log(resAdd);
    let resSub = processMe(10,5,'sub');
    console.log(resSub);

    // Example function using callback
    const addFunc = (x,y) => {
        return x + y;
    }
    const subFunc = (x,y) => {
        return x - y;
    }

    const mulFunc = (x,y) => {
        return x * y;
    }
    const processThis = (x,y,callback) => {
        return callback(x,y);
    }

    console.log('Used Callback Function');
    console.log(processThis(5,3,addFunc));

    return(
        <div className="callbackFunction">
            <h1>What is a callback?</h1>
            <h2>"I will call back later!"</h2>
            <ul>
                <li>A callback is a function passed as an argument to another 
                    function that technique allows a function to call another function.</li>
                <li>A callback function can run after another 
                    function has finished.</li>
            </ul>
            <h2>Why do we need a callback function?</h2>
            <ul>
                <li>Cleaner code</li>
                <li>To easily trace the error</li>
                <li>Cooler looking</li>
            </ul>
        </div>
    )
};

export default callbackFunction;