import React from "react";

export default function Card(props) {
    const { bgClass, bgCircle, cardName, tittle } = props;
    return (
        <div className={`relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg ${bgClass}`}>
            <div className="px-4 py-5 flex-auto">
                <div className={`text-white p-3 text-left inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgCircle}`}>
                    <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">{cardName}</h6>
                <h6>
                    {/* {title} */}
                </h6>
                <p className="mt-2 mb-4 text-orange-600">
                    {props.children}
                </p>
            </div>
        </div>
    )
}