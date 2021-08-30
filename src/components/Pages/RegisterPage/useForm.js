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
    agree: ''
  });
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleFileChnage = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    values.image = file;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values, checked));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(reader.result);
      if (checked.toString() === 'true') {
        register(values, reader.result);
        setIsSubmitting(true);
      }   
    };
    reader.onerror = () => {
      console.error("Error reading image file here");

    };  
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  // const uploadImage = (base64EncodedImage) => {
  //   let body = JSON.stringify({ data: base64EncodedImage }),
  // }

  const register = async (data, base64EncodedImage, ) => {
      let details = {
        childName: data.name,
        age: data.age,
        parentName: data.parentName,
        parentNumber: data.parentNumber,
        parentEmail: data.parentEmail,
        image: base64EncodedImage
      }
      // console.log("Details", details, details.image);
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

  return { handleChange, values, handleSubmit, file, errors, handleFileChnage, handleCheck, checked };
};

export default useForm;
