import { useState } from 'react';

const useForm = (initialValues={}) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleSubmit = (onSubmit) => (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    const handleReset = () => {
        setValues(initialValues);
    }

    return {
        values,
        handleChange,
        handleSubmit,
        handleReset
    };
};

export default useForm