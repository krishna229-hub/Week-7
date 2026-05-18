function Test1(x){
    //state
    let {message1,message2}=props.message;
    //return react elements
    return(
        <div>
            <h1 className="bg-amber-300 p-10 m-5">{x.message}</h1>            
        </div>
    );
};

export default Test1;