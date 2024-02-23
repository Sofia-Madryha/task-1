import { Form } from "../../components";

const Order = () => {

  return (
    <section className="form">
      <div className="form__container container">
        <div className="form__header">
          <h1 className="form__title title">Inspire</h1>
          <h2 className="form__subtitle subtitle">
            Brief description if you want to know more about us
          </h2>
        </div>
   <Form/>
      </div>
    </section>
  );
};

export default Order;
