import React from "react";
import CustomerCard from "./CustomerCard";
import Paging from "./Paging";
import style from "../../style/customer.module.css";

const Customer = () => {
  return (
    <section className={style.customer__container}>
      <h3 className={style.customer__heading}>Some</h3>
      <h2 className={style.customer__main}>Our Happy Customers</h2>
      <div className={style.div__el}>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
      <Paging />
    </section>
  );
};

export default Customer;
