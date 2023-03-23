const Mapping = () => {
    
const options = [
    {
        id: 1,
        option: 'option1'
    },
    {
        id: 2,
        option: 'option2'
    },
    {
        id: 3,
        option: 'option3'
    },
    {
        id: 4,
        option: 'option4'
    },
    {
        id: 5,
        option: 'option5'
    },
];

    return(
        <div className="divContainer">
            {
                options.map((item) => {
                    return(
                        <div className='item' key={item.id}>
                            <h1>{item.option}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mapping;