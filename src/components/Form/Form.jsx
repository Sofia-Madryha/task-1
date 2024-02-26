import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "../../ui";
const Form = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  const today = new Date();
  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__control">
        <label>First Name</label>
        <input
          className="form__field"
          placeholder="John"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
      </div>
      <div className="form__control">
        <label>Last Name</label>
        <input
          className="form__field"
          placeholder="Smith"
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
      </div>
      <div className="form__control">
        <label>Phone</label>
        <input
          className="form__field"
          type="tel"
          placeholder="+1 111-11-11"
          {...register("phone", {
            required: true,
            pattern: /^\+\d{1}\s\d{3}-\d{2}-\d{2}$/,
          })}
        />
        {errors?.phone?.type === "required" && <p>This field is required</p>}
        {errors?.phone?.type === "pattern" && (
          <p>It is an example: "+1 234-34-23"</p>
        )}
      </div>
      <div className="form__control">
        <label>Email</label>
        <input
          className="form__field"
          type="email"
          placeholder="info@inspire.com"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && (
          <p>It is an example: "user@example.com"</p>
        )}
      </div>
      <div className="form__control">
        <label>Venue</label>
        <input
          className="form__field"
          type="text"
          placeholder="123 Main Street, Los Angeles, CA 90001"
          {...register("field", {
            required: true,
            maxLength: 250,
          })}
        />
      </div>
      <div className="form__control">
        <label>Event Date</label>
        <DatePicker
          className="form__field date"
          selected={selectedDate}
          onChange={(date)=>{setSelectedDate(date)}}
          dateFormat={"dd/MM/yyyy"}
          minDate={today}
        />
      </div>
      <div className="form__control">
        <label>Comment</label>
        <textarea
          className="form__field comment"
          type="text"
          placeholder="How can we help you?"
          {...register("field", {
            required: true,
            maxLength: 250,
          })}
        />
      </div>
      <Button className='form__button' type="submit">Book</Button>
    </form>
  );
};

export default Form;
