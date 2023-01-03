import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    Name: yup.string().required(),
    ContactNumber: yup.number().positive().integer().required(),
}).required();



export default function FormHook() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmitData = data => {
        return (

            console.log(data)
        )
    }

    // console.log(watch("Name"));

    // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmitData)}>
            {/* register your input into the hook by invoking the "register" function */}
            {/* <input defaultValue="test" {...register("example")} /> */}

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <div className="container" >
                <div className="row" >
                    <div className="col-md-6 m-auto" >
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text"
                                className="form-control" aria-describedby="helpId" placeholder="" {...register("Name")} />
                            {/* <small id="helpId" className="form- text text-muted">Help text</small> */}
                            {errors.Name && <small id="helpId" className="form- text text-muted" >  {errors.Name.message} </small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Contact Number</label>
                            <input type="text"
                                className="form-control" aria-describedby="helpId" placeholder="" {...register("ContactNumber")} />
                            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                            {errors.ContactNumber && <small id="helpId" className="form- text text-muted" >  {errors.ContactNumber.message} </small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text"
                                className="form-control" aria-describedby="helpId" placeholder="" {...register("Email")} />
                            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select className="form-select form-select-lg" name="Gender" {...register("Gender")}>

                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <input type="submit" />
        </form>
    );
}