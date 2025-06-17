import { ChangeEventHandler } from 'react';

import './searchBox.css';
//example typescript function with viod that has no return
//const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

//example typescript function with return of boolean
//const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => { return true }

//interface example. like class based components where they are extensible
// interface ISearchBoxProps extends IChangeHandlerProps {
//     className: string;

//     //? makes this optional
//     placeholder?: string;

// }

// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => void
// }
// interfaces can also be overloaded so you ca write the same declaration again and add to it like this:
// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler}: SearchBoxProps) => {
    return (
        <input className={className} type='search' placeholder={placeholder}
            onChange={
                onChangeHandler
            }
        />
    )
}

export default SearchBox;