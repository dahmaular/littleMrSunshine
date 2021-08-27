import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    parentName: "",
    parentNumber: "",
    parentEmail: "",
    image: '',
  });
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };

  const handleFileChnage = e => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // console.log(values);
    const data = new FormData();
    data.append('file', file)
    
    register(values, data);
    // setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const register = async (data, img) => {
      let details = {
        childName: data.name,
        age: data.age,
        parentName: data.parentName,
        parentNumber: data.parentNumber,
        parentEmail: data.parentEmail,
        image: img
      }
      console.log("Details", details);
    try {
      await axios({
        method: "post",
        url: "http://localhost:3003/api/users",
        data: details,
      }).then((response) => {
        console.log("Response", response);
        if (response.status === 200) {
            try {
                 axios({
                    method: "post",
                    url:"http://localhost:3003/api/initialize",
                    data: {
                        userId: response.data.data._id
                    }
                }).then((res) => {
                    console.log("Initialize votes res", res);
                })
            } catch (error) {
                console.log("Initializing vote error", error)
            }
        }
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  return { handleChange, values, handleSubmit, errors, handleFileChnage };
};

export default useForm;
