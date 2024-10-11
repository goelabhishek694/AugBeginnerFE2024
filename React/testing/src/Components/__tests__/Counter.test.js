import {fireEvent, render, screen} from "@testing-library/react";

import Counter from "../Counter";

test("initial state check", ()=>{
    //render
    render(<Counter></Counter>)

    //selection
    const countElement = screen.getByText("Count is 0");
    const plusElement = screen.getByText("+");
    const minusElement = screen.getByText("-");

    // assertion
    expect(countElement).toBeInTheDocument();
    expect(plusElement).toBeInTheDocument();
    expect(minusElement).toBeInTheDocument();
})

test("increment by one", ()=>{
    //render
    render(<Counter></Counter>)

    //selection
    
    const plusElement = screen.getByText("+");
    fireEvent.click(plusElement);

    // assertion
    const countElement = screen.getByText("Count is 1");
    expect(countElement).toBeInTheDocument();
    
})

test("decrement by two", ()=>{
    //render
    render(<Counter></Counter>)

    //selection
    
    const minusElement = screen.getByText("-");
    fireEvent.click(minusElement);
    fireEvent.click(minusElement);

    // assertion
    const countElement = screen.getByText("Count is -2");
    expect(countElement).toBeInTheDocument();
    
})