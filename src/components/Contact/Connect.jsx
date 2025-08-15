import React from "react";
import Form from "./Form";

const Connect = () => {
    return (
        <section className="pb-58 sm:pb-74 lg:pb-56">
            <div className="wrapper px-8 sm:px-0 pt-20 sm:pt-49 lg:pt-0 lg:grid lg:grid-cols-[350px_1fr] lg:gap-8">
                <div className="lg:pt-40">
                    <h2 className="text-[3rem] sm:text-[4.5rem] leading-[40px] sm:leading-[64px] sm:tracking-[-2px] text-b font-bold pr-10">
                        Connect with us
                    </h2>
                </div>
                <Form />
            </div>
        </section>
    );
};

export default Connect;
