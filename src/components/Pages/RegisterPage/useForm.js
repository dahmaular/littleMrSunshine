import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../Constant/ServerDetails";

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
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      if (checked.toString() === 'true') {
        register(values, reader.result);
      } 
      
    };
    reader.onerror = () => {
      console.error("Error reading image file here");
      setIsLoading(false);
    };  
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const register = async (data, base64EncodedImage, ) => {
    setIsLoading(true);
      let details = {
        childName: data.name,
        age: data.age,
        parentName: data.parentName,
        parentNumber: data.parentNumber,
        parentEmail: data.parentEmail,
        image: base64EncodedImage
      }
    try {
      await axios({
        method: "post",
        url: `${baseUrl}api/users`,
        data: details,
      }).then((response) => {
        console.log("Response", response);
        if (response.status === 200) {
            try {
                 axios({
                    method: "post",
                    url:`${baseUrl}api/initialize`,
                    data: {
                        userId: response.data.data._id
                    }
                }).then((res) => {
                    console.log("Initialize votes res", res);
                    setIsLoading(false);
                    handleShow();
                })
            } catch (error) {
                console.log("Initializing vote error", error)
                setIsLoading(false);
            }
        }
      });
    } catch (error) {
      console.log("fetching data error", error);
      setIsLoading(false);
    }
  };

  return { handleChange, values, handleSubmit, file, errors, handleFileChnage, 
    handleCheck, checked, isLoading, show, handleClose, handleShow };
};

export default useForm;
