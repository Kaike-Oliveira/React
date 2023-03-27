import {render, screen} from "@testing-library/react";
import {Button} from "./index";
import userEvent from "@testing-library/user-event";

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load more" />);

        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i });
        // expect(button).toHaveAttribute('class', 'button');
        expect(button).toBeInTheDocument();
    })

    it('should call function on button click', function () {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', {name: /load more/i})

        userEvent.click(button);

        expect(fn).toBeCalledTimes(1)
    });

    it('should show when the button be disabled', function () {
        render(<Button text="Load more" disabled={true} />);

        expect(screen.getByRole('button', {name: /load more/i})).toBeDisabled();
    });

    it('should show when the button be enabled', function () {
        render(<Button text="Load more" disabled={false} />);

        expect(screen.getByRole('button', {name: /load more/i})).toBeEnabled();
    });
})