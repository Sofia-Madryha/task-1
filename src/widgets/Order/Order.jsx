import { Form } from "../../components";

const Order = () => {
  return (
    <section className="order__section section">
      <div className="order__container container">
        <div className="order__header section-header">
          <h1 className="order__title title">Inspire</h1>
          <h2 className="order__subtitle subtitle">
            To maintain high quality standards, I am selective in the weddings I
            shoot and only take on a small number each year.
          </h2>
          <h2 className="order__subtitle subtitle">
            I look forward to connecting with you!{" "}
          </h2>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Order;
