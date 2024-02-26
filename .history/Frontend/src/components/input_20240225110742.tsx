import { FormEvent } from "react";

export const Input = ({ type, placeholder, handleChange, className, ...rest }:{
    type: string;
    placeholder: string;
    handleChange: (e: FormEvent<HTMLInputElement>) => void;
    className: string;
    [key: string]: unknown;
}) =>  {
    return (<input/>);
}