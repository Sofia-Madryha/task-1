import { useForm } from "react-hook-form";

const Form =()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
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
          <label>Last Name</label>
          <input
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
          <label>Phone</label>
          <input
            type="tel"
            {...register("phone", {
              required: true,
              pattern: /^\+\d{1}\s\d{3}-\d{2}-\d{2}$/,
            })}
          />
          {errors?.phone?.type === "required" && <p>This field is required</p>}
          {errors?.phone?.type === "pattern" && (
            <p>It is an example: "+1 234-34-23"</p>
          )}

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
          {errors?.email?.type === "pattern" && (
            <p>It is an example: "user@example.com"</p>
          )}

          <label>Date</label>
          <input
            type="date"
            {...register("date", {
              valueAsDate: true,
            })}
          />
          <input
            type="text"
            placeholder="How can we help you?"
            {...register("field", {
              required: true,
              maxLength: 250,
            })}
          />
          <button type="submit">Book</button>
        </form>
    )
}

export default Form;