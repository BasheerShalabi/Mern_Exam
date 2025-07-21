import useForm from './useForm'

const MemberForm = (props) => {
    const {data ,errors, onSubmit} = props
    const {values,handleChange , handleSubmit , handleReset} = useForm(data)
    console.log("MemberForm initialized with data:", values);
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label >Full Name</label>
                    <input type="text" name='fullname' onChange={handleChange} value={values.fullname} className="form-control" placeholder="Enter Full Name" />
                    {errors.fullname && <span className="text-danger">{errors.fullname}</span>}
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name='email' onChange={handleChange} value={values.email} className="form-control" placeholder="Enter email" />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                    <label className="form-check-label">
                        Gender
                    </label>
                <div className="form-check">
                    <input className="form-check-input" onChange={handleChange} value="male" type="radio" name="gender" defaultChecked={values.gender === "male"} />
                    <label className="form-check-label">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={handleChange} value="female" type="radio" name="gender" defaultChecked={values.gender === "female"} />
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={handleChange} value="prefer not to say" type="radio" name="gender" defaultChecked={values.gender === "prefer not to say"}/>
                    <label className="form-check-label">
                        Prefer not to say
                    </label>
                </div>
                {errors.gender && <span className="text-danger">{errors.gender}</span>}
                <div className="form-group">
                    <label>Password</label>
                    <textarea className="form-control" onChange={handleChange} value={values.details} name="details" placeholder="Description...." />
                    {errors.details && <span className="text-danger">{errors.details}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                <button onClick={handleReset} className="btn btn-primary">Reset</button>
        </div>
    )
}

export default MemberForm