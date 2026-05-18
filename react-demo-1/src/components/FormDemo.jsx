import {useForm} from "react-hook-form"
function FormDemo(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm=(obj)=>{
        setError('dob',{
            type:"manual"
        })
    }
    return(
        <div className="text-center border-2 bg-pink-400 mt-5 py-3 w-80 mx-auto">
            <h1 className="text-2xl font-bold py-2">User Registration Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-2 ">
                <input className="border-1 " type="text" name="Firstname" id="name" placeholder="Firstname" {...register("Firstname",{required:true,minLength:4,maxLength:10})} />
                
                {
                    errors.Firstname?.type=='required'&&<p className="text-red-500">Firstname Required</p>
                }
                {
                    errors.Firstname?.type=='minLength'&&<p className="text-red-500">Enter min 4 characters</p>
                }
                {
                    errors.Firstname?.type=='maxLength'&&<p className="text-red-500"> max 10 characters</p>
                }
                
                </div>
                <div className="mb-2 ">
                <input className="border-1" type="text" name="Lastname" id="name" placeholder="Lastname" {...register("Lastname",{required:true,minLength:4,maxLength:10})} />
                 {
                    errors.Lastname?.type=='required'&&<p className="text-red-500">Lastname Required</p>
                }
                {
                    errors.Lastname?.type=='minLength'&&<p className="text-red-500">Enter min 3 characters</p>
                }
                {
                    errors.Lastname?.type=='maxLength'&&<p className="text-red-500"> max 10 characters</p>
                }
                </div>
                <div className="mb-2">
                <input className="border-1"  type="email" name="email" id="email" placeholder="Email" {...register("email",{required:true})} />
                 {
                    errors.email?.type=='required'&&<p className="text-red-500">Email Required</p>
                }
                </div>
                <div className="mb-2 ">
                <input className="border-1 " type="date" name="Date of birth" id="DOB" placeholder="DOB" {...register("Date of birth")} />
                </div>
                <button className="bg-amber-300 py-2 px-4 rounded-md text-white" type="submit">Login</button>
            </form>
        </div>
    )
}
export default FormDemo;